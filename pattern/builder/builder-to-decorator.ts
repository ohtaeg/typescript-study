// 빌더 패턴을 데코레이터로 변경하는 연습
// 데코레이터는 함수이다 잊지말자.

// 생성자를의 데이터를 조작하려면 인자로 받고있는 생성자를 상속받은 클래스를 리턴해줘야한다.
export function Builder<T extends { new (...args: any[]): {} }> (constrctor: T) {
    const keys = Object.keys(new constrctor());
    return class extends constrctor {
        static Builder = class {
            constructor() {
                for (let key of keys)  {
                    // 여기서 this는 빌더이다. 빌더의 멤버 변수들을 정의할 것이다.
                    Object.defineProperties(this, {
                        ["_" + key] : {
                            value : this[key],
                            enumerable: true, // 탐색이 가능해야하기 때문에 순환 가능하게
                            writable: true // setter가 필드에 값을 할당해줘야하기 때문에 값 할당 가능하게
                        },
                        [key] : {
                            value : (newValue: any) => {
                                this["_" + key] = newValue;
                                return this;
                            },
                            enumerable: true,
                        }
                    });
                }
            }

            build() {
                return new constrctor(
                    ...Object.keys(this)
                             .filter(key => key.startsWith("_") ? true : false)
                             .map(element => this[element])
                )
            }
        }
    }

}

// 현재 에러나서 주석처리
// @Builder
class PostEntity {
    // 데코레이터를 쓰려면 꼭 이렇게 해야함 builer.ts의 UserEntity와 같은 생성자는 못씀
    // 데코레이터에 생성자를 넘겨줘야하기 때문
    constructor(public title: string, public content: string, public author: string) {}
}

// 여기서 데이터 무결성 에러가 발생한다. 데코레이터로 인해 타입 무결성 때문
// 우회하는 방법은 다음과 같다.
//  1. 빌더 초기화 클래스를 만들고 (오버라이딩 되는 점을 이용) 상속받는 방법, 
//     장점 - 간편, 단점 - 상속, undefined 방어 불가
class BuilderInit {
    static Builder = class {
        build() {}

        [props: string] : Function;
    }
}

// 현재 에러나서 주석처리
// @Builder
class PostEntity2 extends BuilderInit {
    constructor(public title: string, public content: string, public author: string) { 
        super() 
    }
}

const post: PostEntity2 = new PostEntity2.Builder()
.title("hello")
.content("world")
.author("ohtaeg")
.build();

console.log(post);
    

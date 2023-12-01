
/**
 * 실무에서 클래스 활용은 지양하는게 좋다.
 * TS로 작성한 클래스를 js로 변환하면 최적화가 안될 수 있다.
 * 그리고 ts로 작성하여 변환된 js를 보면 class가 다 function으로 바뀌어잇다.
 * 프로토 타입과 function으로 충분히 만들 수 있다.
 * 그래서 클래스를 함수로 바꾸는 연습을 해보자.
 */
class PsersonClass {
    constructor(public name: string, public city: string) {}

    getName() {
        console.log(`my name is ${this.name}`);
    }
}

const personclazz = new PsersonClass("class", "i-town");
console.log("class type is ", Object.getPrototypeOf(personclazz)); // {}



// 위 클래스를 함수로 바꾼다면 아래와 같다.
function PsersonFunciton(name: string, city: string) {
    this.name = name;
    this.city = city

    // 익명함수로 할당, 화살표 함수는 안되고 function 키워드를 활용해야한다.
    // 호이스팅의 차이가 있다. fucntion은 올라가고 화살표는 순서에 영향을 받는다.
    // this 차이가 있다.일반 함수는 자신이 종속된 객체를 this로 가리키고 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
    this.printName = function() {
        console.log("getName : ", this)
        console.log(`my name is ${this.name}`);
    }
}

const personFunction = new PsersonFunciton("function", "i-town");
console.log("function type is ", Object.getPrototypeOf(personFunction)); // {}

// 상속받은 클래스를 어떻게 함수로? 다음과 같다.
function StudentExtendsPerson(name: string, city: string, uni: string) {
    // 상속받을 클래스를 호출한다.
    // 첫번쨰 인자인 this는 StudentExtendsPerson가 넘어간다.
    PsersonFunciton.call(this, name, city);
    this.uni = uni;

    this.printUni = function() {
        console.log(`Uni is ${this.uni}`);
    }
}

const studentExtendsPerson = new StudentExtendsPerson("자식 클래스", "i-town", "z");
studentExtendsPerson.printName();
studentExtendsPerson.printUni();


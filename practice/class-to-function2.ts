class Add {
    constructor(public a: number, public b: number) {    }

    getResult() {
        return this.a + this.b;
    }
}

// 위 클래스를 인터페이스로 변환하면 아래와 같다.
interface IAdd {
    (a: number, b: number): IAdd;

    a: number;
    b: number;

    getResult(): number;
}


// 위 클래스를 함수로 변환하면 아래와 같다.
// 화살표 함수를 사용하게 되면 this 사용시 addFunction이 종속된 globalThis이다.
// 그래서 this를 이용할 수가 없다. 그래서 반환 값을 인터페이스로 명시해주는데
// return문에서 globalThis와 IAdd 타입은 다르다고 에러 뜬다. globalThis를 IAdd로 반환하는 방법은 아래와 같다.
const addFunction = (a: number, b: number): IAdd => {
    // globalThis가 아닌 IAdd를 반환하려면 as를 통해 타입 단언을 통해 변환하여 복사 (이중 타입 단언)
    // (얕은 복사)
    // const _this = this as any as IAdd;
    // 깊은 복사하는 방법은 다음과 같다.
    //   1. Json으로 변환했다가 복사
    //   2. 
    const _this = JSON.parse(JSON.stringify(this)) as any as IAdd;

    _this.a = a;
    _this.b = b;

    _this.getResult = () => {
        return a + b;
    };

    return _this;
}

const temp1 = addFunction(1, 2);
const temp2 = addFunction(4, 5);
// a, b가 1, 2일 것 같지만 4, 5이다.
// _this가 얕은 복사가 되어 인스턴스가 공유되기 때문
console.log(temp1, temp1.a, temp1.b, temp1.getResult()); 
console.log(temp2, temp2.a, temp2.b, temp2.getResult());


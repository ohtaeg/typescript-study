interface IAdder {
    (a: number, b: number): IAdder;

    a: number;
    b: number;

    getResult(): number;
    getResult2(): number;
}

// 화살표 함수와 function 함수의 this는 서로 다르다.
function add_this(a: number, b: number): void {
    this.a = a;
    this.b = b;

    this.getResult = (): number => {
        return this.a + this.b;
    }

    this.getResult2 = function() {
        return this.a + this.b;
    }
}

// new 키워드는 class에서만 쓰는게 아니라 void function에서 this 객체를 만들어주는 역할을 한다.
const temp11: IAdder = new add_this(1, 2);
// 클래스로 함수 타입으로 변환한 경우 인터페이스를 달면 좋다.
const temp22: IAdder = new add_this(3, 4);

console.log(temp11, temp11.getResult(), temp11.getResult2());
console.log(temp22, temp22.getResult(), temp22.getResult2());

// typeof를 이용하여 함수 타입으로 선언하게되면 타입이 함수로 추론이 되어서 클래스처럼 사용할 수 없다.
const temp33: typeof add_this = new add_this(3, 4);
// console.log(temp33, temp33.getResult(), temp33.getResult2());




// typeof

console.log(typeof "hi");
console.log(typeof 1);
console.log(typeof false);
console.log(typeof {});

const exString: string = "some";
// 같은 타입이라 해당 값 타입으로 선언 불가
// const childString: exString = "zz"; // error
// typeof로 하면 타입 선언 가능
const childString: typeof exString = "z";

function addd(a: number, b: number): number {
    return a + b;
}

// ts에서 지원하는 꺽쇠안에 들어가는 함수의 return을 타입으로 선언할 수 있는 제네릭
// addd 함수의 리턴 타입을 type A에 넣어라, 고로 A는 number가 된다.
type A = ReturnType<typeof addd>;

enum Numbers {
    "zero",
    "one",
    "two",
    "three"
}
// typeof를 통해 대상의 type을 type으로 또 다시 부여할 수 있다.
const nums: typeof Numbers = Numbers;




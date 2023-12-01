// 함수는 객체다.

// new는 객체 인스턴스를 만들뿐만 아니라 함수도 만들 수 있다.
const add_func: Function = new Function("a", "b", "return a + 2 * b");
console.log(add_func(1, 3));

interface Add2 {
    (a: number, b: number): number;
}

const addd2: Add2 = function ADD2(a: number, b: number): number {
    return a + b;
}


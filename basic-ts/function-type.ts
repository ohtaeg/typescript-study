// 아래와 같이 반환값에도 타입 부여 가능
function add(number1: number, number2: number): number {
    return number1 + number2;
}
// void 타입
function add1(number1: number, number2: number): void {}

const minus = (a: number, b: number): number => a - b;
// 왼쪽에 타입 지정
const minus2: (a:number, b: number) => number = (a: number, b: number): number => a - b;



// 반환값이 함수일 경우 해당 함수에 타입을 지정하고 싶다면
const multiple: (a:number, b:number) => () => number = (a: number, b: number): () => number => {
    return () => {
        return a * b * 2;
    }
}
// 위는 복잡하기 때문에 아래와 같이 type 키워드를 이용하여 타입 부여를 하여 가독성 해결
type innerMultiFunc = () => number;
type multiFunc = (a:number, b:number) => innerMultiFunc;
const multiple2: multiFunc = (a: number, b: number): innerMultiFunc => {
    return () => {
        return a * b * 2;
    }
}
const multiple3: (a:number, b:number) => () => number = 
    (a:number, b:number): innerMultiFunc => {
        return multiple2(a, b);
    }


// 타입 별칭
// 함수 타입 자체가 길어지면 많이 사용, 
type SuperVoid = void;
type OrderCount = number;

// never는 절대 발생하지 않는 값의 타입을 표현하는데 사용하며 보통 에러를 발생하거나, 
// 절대 return하지 않는(무한 루프) 함수의 return type으로 많이 사용
function sendError(): never {
    throw {errorCode: 500, message: "internal server error"}
}

const result = sendError();
console.log("result : ", result)







// 아래와 같이 반환값에도 타입 부여 가능
function add(number1, number2) {
    return number1 + number2;
}
// void 타입
function add1(number1, number2) { }
const minus = (a, b) => a - b;
// 왼쪽에 타입 지정
const minus2 = (a, b) => a - b;
// 반환값이 함수일 경우 해당 함수에 타입을 지정하고 싶다면
const multiple = (a, b) => {
    return () => {
        return a * b * 2;
    };
};
const multiple2 = (a, b) => {
    return () => {
        return a * b * 2;
    };
};
const multiple3 = (a, b) => {
    return multiple2(a, b);
};
// never는 절대 발생하지 않는 값의 타입을 표현하는데 사용하며 보통 에러를 발생하거나, 
// 절대 return하지 않는(무한 루프) 함수의 return type으로 많이 사용
function sendError() {
    throw { errorCode: 500, message: "internal server error" };
}
const result = sendError();
console.log("result : ", result);

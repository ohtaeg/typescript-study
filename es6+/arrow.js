// basic
function add(a, b) {
    return a + b;
}

// arrow func 기본형
const add2 = (a, b) => {
    return a + b;
}

// return 1줄
const add3 = (a, b) => a + b;

// param 1개일 때 소괄호 생략 가능
const add4 = a => a + 4;

// object 반환
const add5 = () => {
    return {hello : "world"};
}
// object 반환시 소괄호로 한번 감싸줘야함
const add6 = () => ({hello : "world"});

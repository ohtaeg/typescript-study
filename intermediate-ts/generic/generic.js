"use strict";
function print11(params) {
    console.log(params.data, params.arr);
}
function print22(params) {
    console.log(params.data, params.arr);
}
print11({ data: "123", arr: [123] });
print22({ data: 123, arr: [false] });
// 아래 함수를 제네릭 타입을 왼쪽에 부여하면 다음과 같다.
function returnParams(params) {
    return params;
}
const generic = returnParams;

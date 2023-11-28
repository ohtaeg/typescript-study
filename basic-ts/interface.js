"use strict";
/**
 * interface
 */
// man이라는 객체가 있고 print 함수는 어떤 파라미터든 받도록 되어있다.
const man = {
    name: "ohtaeg",
    age: 32
};
function print(params) {
    var _a;
    console.log((_a = params.city) !== null && _a !== void 0 ? _a : "default city is incheon");
}
print(man);
const men = {
    name: "ohtaeg",
    age: 32
};
function print2(params) {
    var _a;
    console.log((_a = params.city) !== null && _a !== void 0 ? _a : "default city is incheon");
}
print2(men);
// 익명 인터페이스, 세미콜론으로 해야함!
const man3 = {
    name: "ohtaeg",
    age: 32
};

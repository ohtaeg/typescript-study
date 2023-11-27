// $ node es6+/object.js

const ob = {
    name : "ohtaeg",
    age : 32,
    func1 : function prt() {
        console.log("hello world")
    },

    func2 : () => {
        console.log("hello world2");
    },

    func3() {
        console.log("hello world3");
    },

    prt
};

function prt() {
    console.log("hello world4");
}

ob.func1();
ob.func2();
ob.func3();
ob.prt();

const test = "test word";
// 키보드에서 영문으로 숫자 1옆에 기호를 사용하게 되면 문자열로 사용함과 동시에 $를 이용하여 아래처럼 js 표현식 사용 가능
const liter = `${test} ${1 + 2 + 3}`;
console.log(liter);

// 동적으로 이름짓고 싶을 때 가능
const ob2 = {
    [test] : 1,
    [1 * 2 * 3] : 6
}
console.log(ob2);

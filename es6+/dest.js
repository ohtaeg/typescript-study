
// 실행 커맨드 $ node es6+/dest.js

// 1. 생략
// key와 value가 같으면 아래처럼 value 생략이 가능함
const register = (ID, PW) => ({ID, PW});
console.log(register("ohtaeg", "zzz"));

// 2. 객체
// 보통 객체는 아래와 같이 변수에 할당함
const man = {
    name : "ohtaeg",
    age : 32,
    sex : "male"
}
console.log(man.name);

// 비구조화 할당 (1)
const {name : manName} = {
    name : "ohtaeg",
    age : 32,
    sex : "male"
}
console.log(manName);

// 비구조화 할당 (2)
// 1번과 다르게 객체의 필드명과 같게 하는 경우 생략 가능
const {name, age, sex} = {
    name : "ohtaeg",
    age : 32,
    sex : "male"
}
console.log(name, age, sex);

// 3. 배열
// 1, 2번을 배열에도 적용 가능
const [first, second, third] = [true, false, "hi"];
console.log(first, second, third);

// 4. spread 연산자 ...
// 왼쪽에 연산자를 사용하면 나머지를 담는다.
const [first2, ...rest] = [true, false, "hi"];
console.log(first2, rest);
// 오른쪽에 연산자를 사용하면 전개를 해준다.
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
console.log(arr2);

// 객체에도 전개 연산자가 적용이 된다.
const {name2, ...rest2} = {
    name2 : "ohtaeg",
    age : 32,
    sex : "male"
}
console.log(name2, rest2);
console.log({
    ...rest2,
    height : 174
});

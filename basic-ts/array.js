"use strict";
// 배열에 타입 부여
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = ["hi", "hello", "world"];
const arr4 = ["hi", "hello", "world"];
// 많은 타입이 섞인 배열은 어떻게 타입을 부여할까?
// 사실 이런 배열은 잘못된 설계임
const arr5 = [1, true, false, "mix", {}];
const arr6 = [
    {
        name: "ohtaeg",
        age: 32,
        city: "i-town",
    },
    {
        name: "ohtaeg",
        age: 32
    }
];
// 튜플 - 배열의 길이와 안에 원소를 바꿀 수 없는 '불변성 유지'를 위한 자료구조
// 원소과 타입을 1:1 매핑
const tuple = [1, "hi", {}, []];
tuple.push(1); // 논리적인 자료구조라서 값은 들어가게 됨

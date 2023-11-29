"use strict";
// 합집합, 여러 타입을 지정해야하는 경우, | (or)
let nameOrAge;
nameOrAge = "ohtaeg";
nameOrAge = 25;
function printUnion(params) {
    // if (params.name) // Age에 name이 없어서 이렇게 못함
    // if (params.age)  // Name에 age가 없어서 에러가 남
    // 아래와 같이 파라미터에 해당 필드가 있는지 판단하도록 해야함, [타입 가드]
    if ("name" in params) {
        console.log(params.name);
    }
    if ("age" in params) {
        console.log(params.age);
    }
}
printUnion({ name: "ohtaeg" });
printUnion({ age: 32 });

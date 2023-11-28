"use strict";
// undefined
// 왼쪽은 타입, 오른쪽은 값
const un = undefined;
function printName(params) {
    console.log(params.name);
}
// tsconfig.json > compilerOptions 에서 strictNullChecks 옵션을 false로 하면 런타임에서 undefined 참조 에러 발생하게 된다.
// 모든 타입의 최하위 계층인 undefined이다 보니 값이 정상적으로 들어가는 것으로 인지하기 때문에 문제!!
// 그래서 ? or ?? 연산자를 잘 활용해주자
// printName(undefined);

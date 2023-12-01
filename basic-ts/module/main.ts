// 모듈 사용법
// 다른 파일의 함수를 쓰고싶을 때

// 모듈에서 특정 함수만 갖고오고 싶을 떄
import {add_module, minus_module} from "./module1";
// 해당 모듈을 MATH 라는 이름으로 별칭하고 다 갖고오고 싶을 때
import * as MATH from "./module1"; 

console.log(add_module(1, 2), minus_module(1, 2));
console.log(MATH.add_module(1, 2), MATH.minus_module(1, 2));

// 네임스페이스 모듈 사용
console.log(MATH.MODULE_EXAMPLE.add_module(1, 2), MATH.MODULE_EXAMPLE.minus_module(1, 2));


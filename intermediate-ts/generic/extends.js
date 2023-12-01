// extends
// 1. 타입 제한을 위해 사용, 아래 제네릭 함수에 대해서 첫번째 파라미터는 string 과 number로만 제한하고 싶을 때
function add2(params, param2) {
    if (typeof params === "string") {
        console.log("string");
    }
    if (typeof params === "number") {
        console.log("number");
    }
    if (typeof param2 === "object") {
        console.log("object");
    }
    if (typeof param2 === "boolean") {
        console.log("boolean");
    }
}
add2("z", { hi: "hi" });
add2(123, false);
// add2<boolean, boolean>(true, false); // error
// 2. 보장, 안정성을 위해 사용
// 만약 위와 같이 최상위인 object로 해버린다면 타입 보장이 안된다.
function execute(params) {
    // params.hi(); object는 hi 메서드를 모르기 때문에 에러 발생
}
function execute2(params) {
    params.hi();
}

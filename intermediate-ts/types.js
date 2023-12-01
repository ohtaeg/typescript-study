// 타입에 속한 필드를 접근할 수 있다.
// 그렇다면 function print(params : User) 로 접근해도 되는거 아님?
// 타입이 많을 경우 한 곳에 모아두고 이렇게 활용할 수 있음
function print(params) {
    console.log(params.name);
    console.log(params.age);
}
function searchBook(params) {
    console.log(params.title);
    console.log(params.price);
}

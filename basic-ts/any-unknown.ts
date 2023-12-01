// any
// 어떤 타입이든 올 수 있기 때문에 위험함
const anyUser: any = {
    id : "ohtaeg",
};

// 참조는 가능하지만 값이 undefined이다.
console.log(anyUser.name) // undefined
console.log(anyUser.length) // undefined


// unknown
const unknownUser: unknown = {
    id : "ohtaeg"
}
// any와 비슷하지만 차이점으로 참조 자체가 불가능하다.
// console.log(unknownUser.id);     // 올바른 값이라도 error
// console.log(unknownUser.name);   
// console.log(unknownUser.length);
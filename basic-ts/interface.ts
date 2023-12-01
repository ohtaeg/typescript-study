/**
 * interface
 */

// man이라는 객체가 있고 print 함수는 어떤 파라미터든 받도록 되어있다.
const man = {
    name : "ohtaeg",
    age : 32
};

function printt(params: any) {
    console.log(params.city ?? "default city is incheon");
}

printt(man);



// 명세, 타입, 클래스를 만들 때 인터페이스를 주로 사용
interface Person {
    name : string;
    age : number;
    city?: string; // city라는 값이 안넘어올수도 있을 때 문자열로 취급
}

const men: Person = {
    name : "ohtaeg",
    age : 32
};

function print2(params: Person) {
    console.log(params.city ?? "default city is incheon");
}

print2(men);

// 익명 인터페이스, 세미콜론으로 해야함!
const man3: {name: string; age: number; city?: string;} = {
    name : "ohtaeg",
    age : 32
};
interface Book {
    title: string;
    publisher: string;
    price: number;
    author: string;

}

// 정해진 key만 들어오도록 하고 싶다면 keyof
// Book에 있는 key로들만 제한을 한다.
// keyof 타입을 string으로 주면 에러가 나는데 params의 프로퍼티 키인지 타입스크립트가 알 수 없어서 에러가 뜬다.
/**
 * keyof 연산자는 객체 타입의 프로퍼티 키를 문자열 리터럴 유니온 타입으로 가져오는 연산자이다.
 * 따라서 keyof 연산자를 이용하여 반환된 값은 문자열 리터럴 유니온 타입(string | number | ...) 이 되는데
 * key의 타입을 string으로 주면, params 객체에서 해당 문자열 키가 있는지 검사할 수 없기 때문에 컴파일러가 에러를 발생
 */

function printer(params: Book, key: keyof Book) {
    console.log(params[key]);
}

printer ({
    title : "TS 배우기",
    publisher : "asdf",
    price : 5000,
    author : "asdf",
}, "title") // 두번째 파라미터에 다른 key값을 넣으면 에러가 난다.
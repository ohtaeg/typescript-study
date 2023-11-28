enum categories {
    HOME,
    KITCHEN,
}

// 값을 설정하지않으면 기본 값으로 0부터 들어감
console.log(categories.HOME); // 0
console.log(categories.KITCHEN); // 1

enum categories2 {
    HOME = "H",
    KITCHEN = "K",
}

console.log(categories2.HOME); // "H"

// 리터럴 타입
// enum 대신 아래와 같이 특정값에 대한 타입만 부여가 가능하기도 함, enum을 활용하여 재사용 측면을 더 끌어올리자.
const category: "HOME" | "KITCHEN" = "HOME";
const category1: 1 | 2 = 2;
console.log(category);
console.log(category1);

/**
 * 컴파일 된 js 파일을 보면 enum 은 함수 형태로 변환이 되어있다. 
 * js 에서는 enum 이 실제로 없기 때문이다.
 * 따라서 tsc는 enum을 function 으로 구현을 해놓는다.
 */



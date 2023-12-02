// 백틱 (`)

/**
 * 백틱을 이용한 문자열 다뤄보기
 * 백틱의 특징 중 하나는 변수를 넣을 수 있다.
 */
let color: `#${string}`;

// 변수앞에 #을 해놓으면 #으로 시작하는 문자열만 가능
// color = "red" // error
color = "#ffffff";

// 자릿수까지 하려면 함수를 통해 검증한다.
function getColor(color: `#${string}`): `#${string}` | undefined {
    if (color.length === 7) {
        return color;
    }
}


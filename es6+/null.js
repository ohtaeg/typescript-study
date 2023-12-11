const ob = {
  name: "ohtaeg",
  age: 32,
  sex: "male",
};
console.log(ob.asdf); // 없는 키값이라 undefined가 나옴

// ? 는 자바의 Optional과 비슷한 느낌으로 값이 있는지 없는지 모르겠다라는 뜻으로 참조하는 변수에 ?를 붙여 이 값이 없으면 undefined를 출력하세요를 의미
// 해당 참조 변수에 값이 있을 수도 없을수도 있는 상황에 씀
console.log(ob?.asdf?.hi);

// 삼항 연산자와 비슷함
console.log(ob.asdf ? ob.asdf : "seoul");

/**
 * nullish 병합 연산자 '??'
 * 구식 브라우저는 폴리필이 필요
 * a ?? b
 * a가 null도 아니고 (&&) undefined도 아니면 a
 * 그 외의 경우는 b
 *
 * x = (a !== null && a !== undefined) ? a : b;
 */

// ob.asdf가 null or undefined면 seoul
console.log(ob.asdf ?? "seoul");

/**
 * nullish 병합 연산자는 OR 연산자 ||와 상당히 유사해 보이지만 차이는 다음과 같다.
 * || 는 첫 번째 truthy 값을 반환합니다.
 * ??는 첫 번째 정의된(defined) 값을 반환하는데
 * null과 undefined, 숫자 0을 구분 지어 다뤄야 할 때 중요하다!!!!
 */

let height = 0;

// 0을 false로 취급했기 때문에 100
console.log(height || 100); // 100

// height가 정확하게 null이나 undefined일 경우에만 100
console.log(height ?? 100); // 0

/**
 * ??의 연산자 우선순위는 5로 낮은편에 속한다.
 * =와 ? 보다는 먼저, 대부분의 연산자보다는 나중에 평가
 * 안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용하지 못한다.
 * 제약을 피하려면 괄호를 사용해야한다.
 */
// let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'
console.log((1 && 2) ?? 3); // 2


/**
 * 타입 주석
 * - 변수 옆 선언시 소문자로
 */

// number - int, long, etc
const a: number =  1;
const aa: number =  Number("1");

// string - "", '', ``
const b: string = "hi ts";
const bb: string = String(1234);
// const b: number =  "hi ts"; <- 선언한 타입과 값 타입이 매치가 되지 않으면 오류남

// boolean - true, false, (0과1은 X)
const c: boolean = true;

// any - 다 들어감, 잘 안씀
// object - {}, 어떤 객체를 뜻함, 이것도 지양해야함
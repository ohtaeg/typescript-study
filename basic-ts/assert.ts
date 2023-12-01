// !, as (타입 단언)
// 어떤 값이 들어올지 모르는 상황에서 나는 어떤 타입이 들어올지 확신하니까 여기에 대해서 type error를 내뱉지 말아라
const data: any = {}!;
console.log(data.id);
// data가 HTMLElement이라고 단언한다.
console.log((data as HTMLElement).id);

const data1: object = {value : 1}
// 변수 할당과 동시에 as를 쓸 수 있다.
const data11: object = {value : 1} as IExample
// data1에는 value라는 키가 보장되어있지 않기 때문에 에러가 난다. 이때 타입 단언으로 해결하는 방법은 아래 두가지가 있다.
// console.log(data1.value);

// 1. as
interface IExample {
    value : number;
}
console.log((data1 as IExample).value);


// 2. 제네릭
console.log((<IExample>data1).value);
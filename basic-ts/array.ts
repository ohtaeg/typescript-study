// 배열에 타입 부여
const arr1: number[] = [1, 2, 3]
const arr2: Array<number> = [1, 2, 3]

const arr3: string[] = ["hi", "hello", "world"]
const arr4: Array<string> = ["hi", "hello", "world"]

// 많은 타입이 섞인 배열은 어떻게 타입을 부여할까?
// 사실 이런 배열은 잘못된 설계임
const arr5 = [1, true, false, "mix", {}]

// 보통은 특정 객체를 가지고 있는 형태로 많이 함 그런 경우는 인터페이스로 타입을 지정하여 배열에 부여
interface Person {
    name: string;
    age: number;
    city?: string;
}
const arr6: Person[] = [
    {
        name : "ohtaeg",
        age : 32,
        city : "i-town",
    },
    {
        name : "ohtaeg",
        age : 32
    }
]

// 튜플 - 배열의 길이와 안에 원소를 바꿀 수 없는 '불변성 유지'를 위한 자료구조
// 원소과 타입을 1:1 매핑
const tuple: [number, string, object, any[]] = [1, "hi", {}, []]
tuple.push(1); // 논리적인 자료구조라서 값은 들어가게 됨


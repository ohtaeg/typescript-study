// 제네릭
interface IGeneric<T, U> {
    data: T;
    arr: Array<U>
}

function print11(params: IGeneric<string, number>) {
    console.log(params.data, params.arr)
}

function print22(params: IGeneric<number, boolean>) {
    console.log(params.data, params.arr)
}

print11({data : "123", arr: [123] })
print22({data : 123, arr: [false]})


// 아래 함수를 제네릭 타입을 왼쪽에 부여하면 다음과 같다.
function returnParams<T> (params: T) : T {
    return params;
}
const generic: <T> (params: T) => T = returnParams;

interface IGeneric2 {
    returnParams: <T> (params: T) => T;
}



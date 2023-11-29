// 서로 다른 인터페이스이지만 타입이 고정되어있고 (string) 키값만 다른 경우
interface Name {
    name: string;
}

interface School {
    school: string;
}

interface City {
    city: string;
}

// 위와 같은 경우 인터페이스가 많아지면 그만큼 파라미터 타입도 늘어남
function print(params: Name | School | City) {
    if ("name" in params) {}
    if ("school" in params) {}
    if ("city" in params) {}
}

// 객체에서 왼쪽에 대괄호는 props 값을 변수로 받는다는 뜻
interface key1 {
    [props: string]: string;
}

function print(params: key1) {
    if ("name" in params) {}
    if ("school" in params) {}
    if ("city" in params) {}
}
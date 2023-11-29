// intersection 교집합 & (and), 선언된 타입들을 만족해야함
// string & number 같이는 못함 왜냐하면 서로 다른 타입이기 때문에 서로 다른 타입을 조합해야하는 경우 인터페이스를 일반적으로 이용한다. 
const nameAndAge: Name & Age = {
    name: "ohtaeg",
    age: 25,
};

interface Name {
    name: string;
}

interface Age {
    age: number;
}

type intersecton = Name & Age;
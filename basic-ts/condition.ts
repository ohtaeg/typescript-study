interface ICity {
    name: string;
}

interface ISchool {
    year: number;
}

console.log(false ? "true" : false);
// 삼항 연산자와 비슷하다.                       
// ISchool이 ICity를 상속받았는지에 대한 삼항 연산   
// ICity를 상속받고 있지 않기 때문에 string 타입이 된다. true   false
type ConditionType = ISchool extends ICity ? number : string;
const conditionTest: ConditionType = "ㅋ";
console.log(typeof conditionTest);
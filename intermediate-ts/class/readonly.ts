// private와 readonly 차이
// private - 외부로부터 접근 제어
// readonly - 변경 자체 불가능, java의 final 느낌
class LoginData {
    private readonly _id: string; // 오로지 정보 전
    private readonly _password?: string;

    constructor(id: string, password: string = "default value") {
        this._id = id;
        this._password = password;
    }
    
    public get id() : string {
        return this._id;
    }    
}

const loginDto = new LoginData("ohtaeg", "123");
const loginDto2 = new LoginData("ohtaeg");
console.log(loginDto);
console.log(loginDto2);
// loginDto.id = "hi"; 에러남, setter 선언시에도 에러남


// 위 LoginData를 다르게 표현하면 아래와 같다.
class LoginData2 {
    constructor(private readonly _id: string, private readonly _password: string = "default value") {}
    
    public get id() : string {
        return this._id;
    }  
    
    public get password() : string {
        return this._password;
    }
    
}

const otherDto = new LoginData2("ohtaeg", "123");
const otherDto2 = new LoginData2("ohtaeg");
console.log(otherDto);
console.log(otherDto2);
// 데코레이터를 통해 생성자 조작

/**
 * 생성자의 타입을 명확하게 해준다. 
 * @param constructor : {new (email: string): object}
 */
function Controller2(constructor: {new (email: string): object}): any {
    // 생성자의 데이터를 조작하려면 인자로 받고있는 생성자를 상속받은 클래스를 리턴해줘야한다.
    return class extends constructor {
        _email = "change@asdf.com" // 동일한 필드명의 값을 조작
        _name = "zz" // 없는 필드를 만들 수 있다.
    }
}

@Controller2
class TestClass {

    private _email: string;

    constructor(email: string) {
        this._email = email;
    }
}

// 데코레이터는 런타임시 자동으로 호출되지만 생성자 조작은 인스턴스를 직접 만들어야 한다.
console.log(new TestClass("ohtaeg@asdf.com"))
// 데코레이터를 통해 생성자 조작
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 생성자의 타입을 명확하게 해준다.
 * @param constructor : {new (email: string): object}
 */
function Controller2(constructor) {
    // 생성자의 데이터를 조작하려면 인자로 받고있는 생성자를 상속받은 클래스를 리턴해줘야한다.
    return class extends constructor {
        constructor() {
            super(...arguments);
            this._email = "change@asdf.com"; // 동일한 필드명의 값을 조작
            this._name = "zz"; // 없는 필드를 만들 수 있다.
        }
    };
}
let TestClass = class TestClass {
    constructor(email) {
        this._email = email;
    }
};
TestClass = __decorate([
    Controller2,
    __metadata("design:paramtypes", [String])
], TestClass);
// 데코레이터는 런타임시 자동으로 호출되지만 생성자 조작은 인스턴스를 직접 만들어야 한다.
console.log(new TestClass("ohtaeg@asdf.com"));

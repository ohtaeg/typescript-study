"use strict";
/**
 * f(g(x)) ---> f() { return g(x) }, g : 데코레이터 함수
 * g ---> f(g(x)), g를 감싸는 f : 데코레이터 팩토리라고 함
 * 팩토리의 목적은 인자 전달
 */
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
 * 코드를 실행해보면 해당 생성자가 실행되지 않고 파라미터 인자만 넘어온다.
 * 출력값 init class :  /api/v1
 */
// function RestController(constructor: any): any {
//     console.log("init class : ", constructor);
// }
/**
 *
 * 이런 경우 팩토리를 사용한다.
 * 익명함수를 안에 사용하게 되면 RestController가 팩토리가 되고 return function이 데코레이터가 된다.
 * 출력
 * init class :  /api/v1
 * [class HelloController]
 */
function RestController(params) {
    console.log("params : ", params);
    return (constructor) => {
        console.log("Controller : ", constructor);
    };
}
function Post2(params) {
    console.log("Post2 factory params ", params);
    return (constructor) => {
        console.log("[post]  : ", constructor);
    };
}
function UseGuard() {
    console.log("UseGard Factory");
    return (constructor) => {
        console.log("[UseGuard]  : ", constructor);
    };
}
let HelloController = class HelloController {
    _email;
    constructor(email) {
        this._email = email;
    }
    /**
     * 팩토리는 top to bottom으로 실행된다.
     * 즉, Post 팩토리가 먼저 실행되고 UseGuard 팩토리가 실행된다.
     *
     * 데코레이터는 bottom to top으로 실행된다.
     * 즉, UseGuard가 먼저 실행되고 Post가 실행된다.
     */
    postRequest() {
        console.log("postRequest method process!!");
    }
    getRequest() {
        console.log("getRequest method process!!");
    }
};
__decorate([
    Post2("/api/v1/user"),
    UseGuard(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "postRequest", null);
__decorate([
    Get2("/api/v1/user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "getRequest", null);
HelloController = __decorate([
    RestController("/api/v1"),
    __metadata("design:paramtypes", [String])
], HelloController);
function Get2(params) {
    console.log("Get2 factory params ", params);
    /**
     * @param target - 데코레이터가 불린 대상 클래스
     * @param ropertyKey - 메서드 이름
     * @param descriptor - 메타 데이터, 잘 다루지 않음
     */
    return (target, propertyKey, descriptor) => {
        console.log("Get2 deco func : ", target); // 왜 빈값으로 보이는지 의문
        console.log("Get2 propertyKey : ", propertyKey);
        console.log("Get2 descriptor: ", descriptor);
        target.getRequest();
        target[propertyKey]();
        target.postRequest();
    };
}

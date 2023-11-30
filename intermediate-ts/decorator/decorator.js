"use strict";
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
 * TypeScript 및 ES6에 클래스가 도입됨에 따라, 클래스 및 클래스 멤버에 어노테이션을 달거나 수정하기 위해
 * 데코레이터는 클래스 선언과 멤버에 어노테이션과 메타-프로그래밍 구문을 추가할 수 있는 방법을 제공한다.
 *
 *
 * 데코레이터는 함수다.
 * 데코레이터는 무조건 class와, 그리고 class에만 같이 쓴다. (내부 외부 멤버 변수, 메소드, 파라미터...)
 * 자바의 어노테이션과 비슷한 느낌으로 보자.
 */
function Controller(constructor) {
    console.log("init class : ", constructor); // ExampleClass가 여기 들어온 것
}
/**
 * 실행 함수가 없지만 Controller 함수가 실행이 된다.
 * @Controller 같은 경우 클래스 데코레이터라고 하며 클래스 생성자에 적용되며 런타임에 클래스에 붙어서 실행되는 함수이다.
 * 데코레이터 -> @new Claas() 인스턴스화 없이 실행
 *
 * @Column은 프로퍼티 데코레이터로 런타임에 실행되며
 * @Get @Post는 메서드 데코레이터로 런타임에 실행
 */
let ExampleClass = class ExampleClass {
    constructor(email) {
        this._email = email;
    }
    getRequest() { }
    postRequest() { }
};
__decorate([
    Column("email"),
    __metadata("design:type", String)
], ExampleClass.prototype, "_email", void 0);
__decorate([
    Get("/api/v1/user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleClass.prototype, "getRequest", null);
__decorate([
    Post("/api/v1/user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleClass.prototype, "postRequest", null);
ExampleClass = __decorate([
    Controller,
    __metadata("design:paramtypes", [String])
], ExampleClass);
function Get(params) {
    console.log("[get] ", params);
}
function Post(params) {
    console.log("[post] ", params);
}
function Column(params) {
    console.log("column!");
}

"use strict";
class UserInfo {
    name; // default
    age; // 자기 자신한테만 허용 + 자신을 상속받은 자식한테도 허용 가능
    _city; // private인 경우 변수명 앞에 언더바를 붙이는 것인 관례
    _phone;
    constructor(name, age, city, phone) {
        this.name = name;
        this.age = age;
        this._city = city;
        this._phone = phone;
    }
    // getter, private 필드를 외부에 제공하는 getter 메서드는 언더바를 붙이지 않는다.
    get city() {
        return this._city;
    }
    // setter
    set city(city) {
        this._city = city;
    }
    get phone() {
        return this._phone.slice(0, 3) + "-" + this._phone.slice(3, 7) + "-" + this._phone.slice(7, 12);
    }
    set phone(phone) {
        this._phone = phone;
    }
}
// 타입 선언과 동시에 UserInfo 인스턴스 할당 가능
const user = new UserInfo("태경", 1, "seoul", "01011112222");
user.city = "i-town"; // setter가 호출된다.
console.log(user.city); // getter가 호출된다.
console.log(user.phone); // getter가 호출된다.

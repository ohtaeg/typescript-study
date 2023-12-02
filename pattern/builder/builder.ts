class UserEntity {
    name?: string;
    age?: number;
    marketing?: boolean;

    constructor(name?: string, age?: number, marketing?: boolean) {
        // undefined filter
        if (name) {
            this.name = name;
        }

        if (age) {
            this.age = age;
        }

        if (marketing != undefined) {
            this.marketing = marketing;
        }
    }

    // 아래 생성자로 간단하게 해줘도 되지만 값이 안들오면 undefined가 출력된다.
    // constructor(public name: string, public  age: number, public marketing: boolean) {}

    static Builder = class {
        private _name?: string;
        private _age?: number;
        private _marketing?: boolean;

        name(newName: string) {
            this._name = newName;
            return this;
        }

        age(newAge: number) {
            this._age = newAge;
            return this;
        }

        marketing(newMarketing: boolean) {
            this._marketing = newMarketing;
            return this;
        }

        build(): UserEntity {
            return new UserEntity(this._name, this._age, this._marketing);
        }
    }
}

 const userEntity: UserEntity = new UserEntity.Builder()
                                    .age(32)
                                    .marketing(false)
                                    .name("ohtaeg")
                                    .build();

console.log(userEntity);
// 인스턴스 하나만 생성해서 재사용하는 패턴
class SingleTon {
    // private static _instance: SingleTon = new SingleTon(); // 이렇게 해도 됌
    private static _instance: SingleTon;

    constructor() {
        console.log("싱글톤 생성");
    }

    public static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new SingleTon();
        return this._instance;
    }
}


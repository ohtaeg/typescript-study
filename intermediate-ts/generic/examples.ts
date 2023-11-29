/**
 * @param params
 * @param key 
 * 파라미터의 키에 해당하는 값을 반환해주는 함수를 만들고자 한다.
 * 이때 잘못된 key가 들어오는 것을 방지하고자 한다.
 */
function prtKey<T extends object, U extends keyof T> (params: T, key: U): T[U] {
    return params[key];
}

interface ExampleKey {
    name : string;
    phone : string;
}
prtKey<ExampleKey, keyof ExampleKey>({name:"zz", phone:"123123123"}, "name");
// prtKey<ExampleKey, keyof ExampleKey>({name:"zz", phone:"123123123"}, "a"); // error

/**
 * class에 제네릭
 */
class Clazz<T> {
    constructor(private _data: T){}
    
    public set data(v : T) {
        this._data = v;
    }

    public get data() : T {
        return this._data;
    }
    
    
}
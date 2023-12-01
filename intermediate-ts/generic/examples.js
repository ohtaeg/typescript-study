/**
 * @param params
 * @param key
 * 파라미터의 키에 해당하는 값을 반환해주는 함수를 만들고자 한다.
 * 이때 잘못된 key가 들어오는 것을 방지하고자 한다.
 */
function prtKey(params, key) {
    return params[key];
}
prtKey({ name: "zz", phone: "123123123" }, "name");
// prtKey<ExampleKey, keyof ExampleKey>({name:"zz", phone:"123123123"}, "a"); // error
/**
 * class에 제네릭
 */
class Clazz {
    constructor(_data) {
        this._data = _data;
    }
    set data(v) {
        this._data = v;
    }
    get data() {
        return this._data;
    }
}

// 데이터 무결성
// 각각의 서비스에 맞고  각각의 비지니스 로직에 맞는 데이터 무결성이 있을 것이다.
// 아래 car가 어떤 비지니스에서는 마이너스 속력이  허용되지만 어떤 비지니스에서는 마이너스가 허용되지 않는 경우
// 상황에 따라 유용한 프록시를 이용하여 위 문제를 풀어보고자 한다.

interface ICar {
    name: string;
    speed: number;
}

const car = {
    speed : 0,
    name : "라반뗴"
}
const carProxy: ICar = new Proxy<ICar>(car, {
    get(target: ICar, p: keyof ICar) {
        console.log("get : ", target, p)
        return  target[p];
    },

    set(target: ICar, p: keyof ICar, newValue: any, receiver: ICar) {
        console.log("set : ", target, p, newValue, receiver);
        if (p === 'speed')  {
            target[p] = newValue > 0 ? newValue : 0;
        }
        return true;
    },
})

carProxy.speed = 30;
console.log(carProxy.speed);
carProxy.speed = -10;
console.log(carProxy.speed);
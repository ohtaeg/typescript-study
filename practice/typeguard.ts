// 타입 가드

type SNSType = "KAKAO" | "NAVER";

class Detail {
    constructor(public name: string, public age: number, public  city : string) {}
}

interface IDetailUser {
    detail: Detail;
    marketing: boolean;
    sns: SNSType;
}

function setUser(target: IDetailUser, param: keyof IDetailUser, newValue: typeof target[typeof param]) {
    // target[param] = newValue; // 에러남, 타입 제한은 잘했지만 값과 타입이 실제로 올바르게 핑되는지에 대한 보장을 못해주기 때문
    // 값과 타입의 보장을 위해 타입 가드
    if (param === "marketing" && typeof newValue === "boolean") {
        target[param] = newValue;
    }
    if (param === "sns" && typeof newValue === "string")  {
        const temp: SNSType = <SNSType>(newValue);
        target[param] = temp;
    }
    // 인터페이스는 어떻게 타입 가드를 할까? 강의 예제는 갑자기 class로 변환시켜버려 애매해져서 인터넷으로 따로 찾아봐야겠다.
    if (param === "detail" && newValue instanceof Detail) {
        target[param] = newValue;
    }
}

const detail: Detail = new Detail("yongsoo", 25, "seoul");
const detailUser: IDetailUser = {
  detail,
  marketing: true,
  sns: "KAKAO",
};
console.log(detailUser);
setUser(detailUser, "sns", "NAVER");
setUser(detailUser, "detail", new Detail("yongsoocho", 26, "seoul"));
console.log(detailUser);
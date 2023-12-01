// 타입 분기
// as를 이용해 분기를 통해 타입 캐스팅

type userType = "admin" | "manager" | "user";

interface IAdmin {
    type: userType;
    post: any;
    info: any;
    detail: any;
}

interface IManager {
    type: userType;
    post: any;
    info: any;
}

interface IUser {
    type: userType;
    post: any;
}

function getAuth(p: IAdmin | IManager | IUser) {
    // type, post 외에 인터페이스마다 값이 있을수 있고 없을 수 있기 때문에 에러난다.
    // console.log("getAuth : ", p.info)

    switch (p.type) {
        case "admin" : 
            // 타입 캐스팅을 통해 가져온다.
            console.log("admin ", (p as IAdmin).detail);
            break;
        case "manager" :
            console.log("manage ", (<IManager>(p)).info);
            break;
        case "user" : 
            console.log("user ", p.post);
            break;
    }
}

getAuth({type : "manager", post: "post", info: "info", detail: "detail"});

type errorCode = 404 | 500;

interface I_NOT_FOUND  {
    code: errorCode;
    notFoundFunc: any;
}

interface I_INTERNAL_ERROR {
    code: errorCode;
    internalErrorFunc: any;
}

function errorHandler(p: I_NOT_FOUND | I_INTERNAL_ERROR) {
    switch (p.code) {
      case 404:
        console.log((p as I_NOT_FOUND).notFoundFunc);
        break;
      case 500:
        console.log((<I_INTERNAL_ERROR>(p)).internalErrorFunc);
        break;
    }
  }
  errorHandler({ code: 404, notFoundFunc: "404 not found 에러분기 코드 발동" });
  errorHandler({ code: 500, internalErrorFunc: "서버 분기후 재가동!" });

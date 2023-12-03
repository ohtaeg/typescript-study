import { Injectable } from '@nestjs/common';
import { IUserDB, db } from './db/fake.repository';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  somethingLogicToUser(payload) {
    const user: IUserDB = db.find((e) => e.USER_ID === payload.USER_ID);

    // 비밀번호랑 대조해서 로그인

    // 주소 로 배송을 보낸다..

    return user;
  }
}

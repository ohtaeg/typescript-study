import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Body, Post } from '@nestjs/common';
import { IUserInfo, UserInfo } from './types/user-type';
import { UserInfoDto } from './dto/user-dto';
import { UserEntity } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("something")
  somethingLogicToUser(@Query() query) {
    const payload = new UserEntity.Builder().$USER_ID(query.ID).build();

    const result = this.appService.somethingLogicToUser(payload);

    return new UserEntity.Builder()
      .$USER_ID(result.USER_ID)
      .$NAME(result.NAME)
      .$ADR(result.ADR)
      .build();
  }

  @Get()
  getHello(@Query("id") id: number): string {
    console.log(id, typeof id); // number로 받길원했는데 string으로 온다.
    return this.appService.getHello();
  }

  @Post("dto")
  // nest.js에서 맞지 않는 타입으로 보내면 에러를발생해준디.
  @UsePipes(new ValidationPipe({ transform : true}))
  getUserInfoByDto(@Body() body: UserInfoDto): string {
    console.log(body, typeof body.age); // number
    return this.appService.getHello();
  }

  @Post()
  // RequestDto로 받도록, 응답시 에러도 Response로 주도록 변환
  getUserInfo(@Body() body: IUserInfo): string {
    const payload = UserInfo.Request(body);
    console.log(payload, typeof payload.age); 
    return this.appService.getHello();
  }
}

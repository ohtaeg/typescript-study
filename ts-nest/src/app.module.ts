import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserServiceImpl } from './user.service.impl.v1';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  // 인터페이스 및 구현체 의존성 주입 방법
  providers: [AppService, {provide : 'UserService', useClass: UserServiceImpl}],
})
export class AppModule {}

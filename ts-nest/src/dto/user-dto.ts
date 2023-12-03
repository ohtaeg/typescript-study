import { IsNumber, IsString } from "class-validator";
import { IUserDB } from "src/db/fake.repository";

export class UserInfoDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;
}

export class UserQueryDto {
    ID: number | string;
  
    public static Req(p: UserQueryDto) {
      return { ID: typeof p.ID === "number" ? p.ID : Number(p.ID) };
    }
  
    public static Res(p: IUserDB) {
      return {
        ID: p.USER_ID,
        NAME: p.NAME,
        EMAIL: p.EMAIL,
      };
    }
  }
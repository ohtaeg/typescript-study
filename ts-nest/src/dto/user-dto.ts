import { IsNumber, IsString } from "class-validator";

export class UserInfoDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;
}
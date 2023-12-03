import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";

@Injectable()
export class UserServiceImpl implements UserService {
    register(): void {
        return;
    }
    delete(): void {
        return;
    }
    find(): string {
        return "find";
    }

}
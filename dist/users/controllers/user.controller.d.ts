import { User } from '../model/user.schema';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../services/user.service';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    List(): Promise<import("../dto/admin.userList.dto").AdminUserListDto[]>;
    Signup(response: any, user: User): Promise<any>;
    SignIn(response: any, user: User): Promise<any>;
}

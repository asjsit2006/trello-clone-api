import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(req: {
        user: {
            id: number;
        };
    }): Promise<import("./user.entity").User>;
}

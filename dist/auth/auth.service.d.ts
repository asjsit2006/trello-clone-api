import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        user: import("../users/user.entity").User;
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        user: import("../users/user.entity").User;
        token: string;
    }>;
}

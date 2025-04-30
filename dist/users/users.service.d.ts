import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    create(userDto: Partial<User>): Promise<User>;
}

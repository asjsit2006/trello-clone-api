// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import * as bcrypt from 'bcrypt';
// import { User } from './user.entity';
// import { CreateUserDto } from './dto/create-user.dto';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   async create(createUserDto: CreateUserDto): Promise<User> {
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

//     const user = this.userRepository.create({
//       email: createUserDto.email,
//       password: hashedPassword,
//     });

//     return this.userRepository.save(user);
//   }

//   async findByEmail(email: string): Promise<User | null> {
//     return this.userRepository.findOne({ where: { email } });
//   }
  
//   async findById(id: number): Promise<User | null> {
//     return this.userRepository.findOne({ where: { id } });
//   }  
// }



import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  
  // Найти пользователя по email
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Метод для создания нового пользователя
  async create(userDto: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }
}

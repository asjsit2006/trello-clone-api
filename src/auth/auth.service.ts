import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Метод для регистрации пользователя
  async register(registerDto: RegisterDto) {
    const { email, password } = registerDto;

    // Проверяем, существует ли уже пользователь с таким email
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаем нового пользователя
    const user = await this.usersService.create({
      email,
      password: hashedPassword,
    });

    // Генерируем JWT токен
    const payload: JwtPayload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { user, token };
  }

  // Метод для логина
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    
    // Ищем пользователя
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Проверяем пароль
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Генерируем JWT токен
    const payload: JwtPayload = { email: user.email, sub: user.id };  // Теперь доступно поле email
    const token = this.jwtService.sign(payload);

    return { user, token };
  }
}

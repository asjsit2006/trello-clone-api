export interface JwtPayload {
    email: string;
    sub: number; // или string, в зависимости от типа id пользователя
    username?: string;
  }
  
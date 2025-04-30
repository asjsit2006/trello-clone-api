import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ColumnModule } from './columns/column.module';
import { Column } from './columns/column.entity';
import { Card } from './cards/card.entity';
import { CardsModule } from './cards/cards.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'trello_clone',
      autoLoadEntities: true,
      synchronize: true, // ❗ На проде ставь false
    }),
    TypeOrmModule.forFeature([Column, Card]),  // Добавь сюда сущности, с которыми ты работаешь
    UsersModule,
    AuthModule,
    ColumnModule,
    CardsModule
  ],
  
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column } from './column.entity';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Column, User])],
  providers: [ColumnService],
  controllers: [ColumnController],
  exports: [TypeOrmModule],
})
export class ColumnModule {}

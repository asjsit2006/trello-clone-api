import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { ColumnModule } from '../columns/column.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Card]),
    ColumnModule,
  ],
  providers: [CardService],
  controllers: [CardController],
})
export class CardsModule {}

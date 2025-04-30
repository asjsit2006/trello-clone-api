import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { Column } from '../columns/column.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
    @InjectRepository(Column)
    private readonly columnRepository: Repository<Column>,
  ) {}

  async create(columnId: number, createCardDto: CreateCardDto) {
    const column = await this.columnRepository.findOne({ where: { id: columnId } });
    if (!column) {
      throw new Error('Column not found');
    }

    const card = this.cardRepository.create({ ...createCardDto, column });
    return this.cardRepository.save(card);
  }

  async getAllByColumn(columnId: number) {
    return this.cardRepository.find({ where: { column: { id: columnId } } });
  }

  async getById(cardId: number) {
    return this.cardRepository.findOne({ where: { id: cardId } });
  }

  async update(cardId: number, updateCardDto: CreateCardDto) {
    const card = await this.cardRepository.findOne({ where: { id: cardId } });
    if (!card) {
      throw new Error('Card not found');
    }
    Object.assign(card, updateCardDto);
    return this.cardRepository.save(card);
  }

  async remove(cardId: number) {
    const card = await this.cardRepository.findOne({ where: { id: cardId } });
    if (!card) {
      throw new Error('Card not found');
    }
    return this.cardRepository.remove(card);
  }
}

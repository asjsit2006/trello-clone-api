import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './card.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 

import { ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('create/:columnId')
  @ApiOperation({ summary: 'Создать карточку в колонке' })
  @ApiParam({ name: 'columnId', description: 'ID колонки' })
  @ApiBody({ type: CreateCardDto })
  @ApiResponse({ status: 201, description: 'Создана новая карточка', type: Card })
  async createCard(
    @Param('columnId') columnId: number,
    @Body() createCardDto: CreateCardDto,
  ) {
    return this.cardService.create(columnId, createCardDto);
  }


  @Get('column/:columnId')
  @ApiOperation({ summary: 'Получить все карточки по колонке' })
  @ApiParam({ name: 'columnId', description: 'ID колонки' })
  @ApiResponse({ status: 200, description: 'Возвращает все карточки в колонке', type: [Card] })
  async getCardsByColumn(@Param('columnId') columnId: number) {
    return this.cardService.getAllByColumn(columnId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить карточку по ID' })
  @ApiParam({ name: 'id', description: 'ID карточки' })
  @ApiResponse({ status: 200, description: 'Возвращает карточку', type: Card })
  async getCard(@Param('id') id: number) {
    return this.cardService.getById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновить карточку по ID' })
  @ApiParam({ name: 'id', description: 'ID карточки' })
  @ApiBody({ type: UpdateCardDto })
  @ApiResponse({ status: 200, description: 'Карточка обновлена', type: Card })
  async updateCard(
    @Param('id') id: number,
    @Body() updateCardDto: CreateCardDto,
  ) {
    return this.cardService.update(id, updateCardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить карточку по ID' })
  @ApiParam({ name: 'id', description: 'ID карточки' })
  @ApiResponse({ status: 200, description: 'Карточка удалена', type: Card })
  async deleteCard(@Param('id') id: number) {
    return this.cardService.remove(id);
  }
}

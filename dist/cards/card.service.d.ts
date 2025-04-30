import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { Column } from '../columns/column.entity';
export declare class CardService {
    private readonly cardRepository;
    private readonly columnRepository;
    constructor(cardRepository: Repository<Card>, columnRepository: Repository<Column>);
    create(columnId: number, createCardDto: CreateCardDto): Promise<Card>;
    getAllByColumn(columnId: number): Promise<Card[]>;
    getById(cardId: number): Promise<Card | null>;
    update(cardId: number, updateCardDto: CreateCardDto): Promise<Card>;
    remove(cardId: number): Promise<Card>;
}

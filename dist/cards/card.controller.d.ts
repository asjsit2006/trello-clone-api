import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './card.entity';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    createCard(columnId: number, createCardDto: CreateCardDto): Promise<Card>;
    getCardsByColumn(columnId: number): Promise<Card[]>;
    getCard(id: number): Promise<Card | null>;
    updateCard(id: number, updateCardDto: CreateCardDto): Promise<Card>;
    deleteCard(id: number): Promise<Card>;
}

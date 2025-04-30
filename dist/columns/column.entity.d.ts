import { User } from '../users/user.entity';
import { Card } from '../cards/card.entity';
export declare class Column {
    id: number;
    title: string;
    user: User;
    cards: Card[];
}

import { Column as ColumnEntity } from '../columns/column.entity';
export declare class Card {
    id: number;
    title: string;
    description: string;
    column: ColumnEntity;
}

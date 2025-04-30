import { Column as ColumnEntity } from '../columns/column.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    columns: ColumnEntity[];
}

import { ColumnService } from './column.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { Column } from './column.entity';
export declare class ColumnController {
    private readonly columnService;
    constructor(columnService: ColumnService);
    create(createColumnDto: CreateColumnDto): Promise<Column>;
    createColumn(createColumnDto: CreateColumnDto, user: any): Promise<Column>;
    findOne(id: string): Promise<Column>;
    getColumns(user: any): Promise<Column[]>;
    getColumnById(id: number, user: any): Promise<Column>;
}

import { Repository } from 'typeorm';
import { Column } from './column.entity';
import { CreateColumnDto } from './dto/create-column.dto';
import { User } from '../users/user.entity';
export declare class ColumnService {
    private columnRepository;
    private userRepository;
    constructor(columnRepository: Repository<Column>, userRepository: Repository<User>);
    create(createColumnDto: CreateColumnDto): Promise<Column>;
    findOne(id: string): Promise<Column>;
    createColumn(createColumnDto: CreateColumnDto, userId: number): Promise<Column>;
    getColumns(userId: number): Promise<Column[]>;
    getColumnById(columnId: number, userId: number): Promise<Column>;
}

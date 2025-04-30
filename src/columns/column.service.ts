import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Column } from './column.entity';
import { CreateColumnDto } from './dto/create-column.dto';
import { User } from '../users/user.entity';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(Column)
    private columnRepository: Repository<Column>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createColumnDto: CreateColumnDto): Promise<Column> {
    const column = this.columnRepository.create(createColumnDto);
    return await this.columnRepository.save(column);
  }

  async findOne(id: string): Promise<Column> {
    try {
      const numericId = parseInt(id, 10);
      return await this.columnRepository.findOneOrFail({ where: { id: numericId } });
    } catch (error) {
      throw new NotFoundException(`Column with ID ${id} not found`);
    }
  }

  async createColumn(createColumnDto: CreateColumnDto, userId: number): Promise<Column> {
    const user = await this.userRepository.findOne({
        where: { id: userId },
      });
    if (!user) {
      throw new Error('User not found');
    }
  
    const column = this.columnRepository.create({ ...createColumnDto, user });
    return this.columnRepository.save(column);
  }
  
  async getColumns(userId: number): Promise<Column[]> {
    return this.columnRepository.find({ where: { user: { id: userId } } });
  }

  async getColumnById(columnId: number, userId: number): Promise<Column> {
    const column = await this.columnRepository.findOne({ where: { id: columnId, user: { id: userId } } });
    if (!column) {
      throw new Error('Column not found or not owned by the user');
    }
    return column;
  }
}

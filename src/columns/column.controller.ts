import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { ColumnService } from './column.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { Column } from './column.entity'; 


import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';


@ApiTags('Columns')
@Controller('columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post()
  @ApiOperation({ summary: 'Создать колонку' })
  @ApiBody({ type: CreateColumnDto })
  @ApiResponse({ status: 201, description: 'Колонка успешно создана', type: Column })
  async create(@Body() createColumnDto: CreateColumnDto): Promise<Column> {
    return this.columnService.create(createColumnDto);
  }

  @UseGuards(JwtAuthGuard)
  createColumn(@Body() createColumnDto: CreateColumnDto, @GetUser() user): Promise<Column> {
    return this.columnService.createColumn(createColumnDto, user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Получить колонку по ID' })
  @ApiParam({ name: 'id', description: 'ID колонки' })
  @ApiResponse({ status: 200, description: 'Возвращает колонку', type: Column })
  async findOne(@Param('id') id: string): Promise<Column> {
    return this.columnService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  getColumns(@GetUser() user): Promise<Column[]> {
    return this.columnService.getColumns(user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getColumnById(@Param('id') id: number, @GetUser() user): Promise<Column> {
    return this.columnService.getColumnById(id, user.id);
  }
}

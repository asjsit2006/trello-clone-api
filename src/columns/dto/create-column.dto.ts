import { ApiProperty } from '@nestjs/swagger';

export class CreateColumnDto {
  @ApiProperty({ description: 'Название колонки' })
  title: string;

  @ApiProperty({ description: 'Описание колонки', required: false })
  description?: string;
}

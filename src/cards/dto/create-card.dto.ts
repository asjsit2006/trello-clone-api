import { IsString, IsOptional } from 'class-validator';

export class CreateCardDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}

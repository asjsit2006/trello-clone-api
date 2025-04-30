import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Column as ColumnEntity } from '../columns/column.entity'; 

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => ColumnEntity, column => column.cards)
  column: ColumnEntity; 
}

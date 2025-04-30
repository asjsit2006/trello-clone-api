import { Entity, PrimaryGeneratedColumn, Column as TypeOrmColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Card } from '../cards/card.entity';

@Entity()
export class Column {
  @PrimaryGeneratedColumn()
  id: number;

  @TypeOrmColumn() 
  title: string;

  @ManyToOne(() => User, user => user.columns)
  user: User;

  @OneToMany(() => Card, card => card.column)
  cards: Card[];
}
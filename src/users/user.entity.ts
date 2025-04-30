// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Exclude } from 'class-transformer';

// @Entity('users')
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ unique: true })
//   email: string;

//   @Column()
//   @Exclude()
//   password: string;

// //   @OneToMany(() => ColumnEntity, (column) => column.user)
// //   columns: ColumnEntity[];
// }

// src/users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Column as ColumnEntity } from '../columns/column.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;  // добавь поле email

  @Column()
  password: string;  // добавь поле password

  @OneToMany(() => ColumnEntity, column => column.user)
  columns: ColumnEntity[];
}

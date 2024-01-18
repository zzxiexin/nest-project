import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}

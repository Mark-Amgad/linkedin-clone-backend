import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { IUser, IUserOnCreation } from '../interfaces/user.interface';

@Table
export class User extends Model<IUser, IUserOnCreation> implements IUser {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  location: string;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;
}

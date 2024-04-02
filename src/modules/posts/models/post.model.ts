import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { IPost, IPostOnCreation } from '../interfaces/post.interface';
import { User } from 'src/modules/users/models/user.model';

@Table
export class Post extends Model<IPost, IPostOnCreation> implements IPost {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;

  @BelongsTo(() => User)
  user?: User;
}

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
import { User } from 'src/modules/users/models/user.model';
import { IProfile, IProfileOnCreation } from '../interfaces/profile.interface';

@Table
export class Profile
  extends Model<IProfile, IProfileOnCreation>
  implements IProfile
{
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  headline?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  summary?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  industry?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  website?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  avatar?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  cover?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  numberOfConnections: number;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;

  @BelongsTo(() => User)
  user?: User;
}

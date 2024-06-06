import { IUser } from 'src/modules/users/interfaces/user.interface';
import { IBase } from 'src/shared/interfaces/base.interface';

export interface IProfile extends IBase {
  userId: string;
  user?: IUser;

  headline?: string;
  summary?: string;
  industry?: string;
  website?: string;
  avatar?: string;
  cover?: string;

  noOfConnections: number;
}

export interface IProfileOnCreation
  extends Omit<IProfile, 'id' | 'createdAt' | 'updatedAt'> {}

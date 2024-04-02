import { IBase } from 'src/shared/interfaces/base.interface';

export interface IUser extends IBase {
  name: string;
  email: string;
  password: string;
  location: string;
}

export interface IUserOnCreation
  extends Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> {}

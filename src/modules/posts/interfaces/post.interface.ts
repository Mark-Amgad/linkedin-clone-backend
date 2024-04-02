import { IBase } from 'src/shared/interfaces/base.interface';

export interface IPost extends IBase {
  content: string;
  userId: string;
}

export interface IPostOnCreation
  extends Omit<IPost, 'id' | 'createdAt' | 'updatedAt'> {}

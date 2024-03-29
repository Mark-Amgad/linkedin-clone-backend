export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserOnCreation
  extends Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> {}

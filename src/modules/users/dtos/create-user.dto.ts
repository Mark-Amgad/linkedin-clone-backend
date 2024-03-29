import { IUserOnCreation } from '../interfaces/user.interface';

export class CreateUserDto implements IUserOnCreation {
  name: string;
  email: string;
  password: string;
  location: string;
}

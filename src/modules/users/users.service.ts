import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  // TODO: to be removed
  async findAll(): Promise<User[]> {
    const users: User[] = await this.userModel.findAll();
    return users;
  }
}

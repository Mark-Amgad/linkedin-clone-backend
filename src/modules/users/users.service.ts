import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './models/user.model';
import { IUserOnCreation } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from '../profiles/models/profile.model';
import { ProfilesService } from '../profiles/profiles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly profilesService: ProfilesService,
  ) {}

  // TODO: to be paginated
  async findAll(): Promise<User[]> {
    const users: User[] = await this.userModel.findAll();
    return users;
  }

  async findOneById(id: string): Promise<User> {
    const user: User = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('There is no user with this ID');
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user: User = await this.userModel.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('There is no user with this Email');
    }
    return user;
  }

  async createOne(user: CreateUserDto): Promise<User> {
    const oldUser: User = await this.userModel.findOne({
      where: {
        email: user.email,
      },
    });
    if (oldUser) {
      throw new ConflictException('A user with this email is already exist!');
    }

    const transaction = await this.userModel.sequelize.transaction();
    try {
      const newUser: User = await this.userModel.create(user, { transaction });
      await this.profilesService.createOne(
        {
          userId: newUser.id,
        },
        transaction,
      );

      await transaction.commit();

      return newUser;
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
}

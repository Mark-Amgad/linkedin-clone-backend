import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUser } from './interfaces/user.interface';

// TODO: all of these endpoints should be guarded for super admins only
@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    const users: User[] = await this.usersService.findAll();
    return users;
  }

  @Post('/')
  async createOne(
    @Body() user: CreateUserDto,
  ): Promise<Omit<IUser, 'password'>> {
    const newUser = await this.usersService.createOne(user);
    const { password, ...newUserWithoutPassword } = newUser.toJSON();
    return newUserWithoutPassword;
  }
}

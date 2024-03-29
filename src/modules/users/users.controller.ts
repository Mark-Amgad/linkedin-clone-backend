import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    const users: User[] = await this.usersService.findAll();
    return users;
  }
}

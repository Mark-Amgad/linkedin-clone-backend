import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dtos/register.dto';
import { IUser } from '../users/interfaces/user.interface';
import { AccessToken } from './interfaces/auth-token.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: RegisterDto): Promise<AccessToken> {
    // hash the password
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    // create user
    const newUser = await this.usersService.createOne(user);
    // generate token
    return { accessToken: await this.generateAuthToken(newUser) };
  }
  async signIn(email: string, password: string): Promise<AccessToken> {
    // get the user
    const user = await this.usersService.findOneByEmail(email);
    // validate the password
    const isMatch: boolean = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Wrong Password');
    }
    return {
      accessToken: await this.generateAuthToken(user),
    };
  }

  private async generateAuthToken(user: IUser): Promise<string> {
    const payload = { id: user.id, name: user.name };
    return await this.jwtService.signAsync(payload);
  }
}

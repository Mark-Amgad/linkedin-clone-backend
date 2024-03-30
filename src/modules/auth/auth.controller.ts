import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dtos/register.dto';
import { AccessToken } from './interfaces/auth-token.interface';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/sign-in.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  async register(@Body() user: RegisterDto): Promise<AccessToken> {
    return this.authService.register(user);
  }

  @Post('/sign-in')
  async signIn(@Body() signInUser: SignInDto): Promise<AccessToken> {
    const { email, password } = signInUser;
    return this.authService.signIn(email, password);
  }
}

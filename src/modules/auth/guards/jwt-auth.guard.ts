import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { EnvironmentVariables } from 'src/config/app.config';
import { ITokenPayload } from '../interfaces/token-payload.interface';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  //TODO: inject reflector and check on isPublic
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // extract token
    const token = this.getTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Please add token');
    }

    // validate token
    try {
      const payload: ITokenPayload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_SECRET'),
      });

      request['user'] = payload;
    } catch (err) {
      throw new UnauthorizedException('The token has expired');
    }
    return true;
  }

  private getTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type === 'Bearer') {
      return token;
    }
    return undefined;
  }
}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'TODO',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}

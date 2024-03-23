import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validateEnvironmentVariables } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateEnvironmentVariables,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

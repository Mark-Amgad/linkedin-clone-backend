import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './config/app.config';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

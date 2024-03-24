import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(
    private readonly sequelize: Sequelize,
    private readonly configService: ConfigService,
  ) {}
  getHello(): string {
    //console.log(this.configService.get('DATABASE_PASSWORD'));
    this.sequelize.query(
      `CREATE TABLE IF NOT EXISTS "db_here_test" (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);`,
    );

    this.sequelize.query(`SELECT 1`);
    return 'Hello World!';
  }
}

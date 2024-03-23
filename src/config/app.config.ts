import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsString,
  validateSync,
  Min,
  Max,
} from 'class-validator';

enum NodeEnvironmentsEnum {
  Development = 'development',
  Test = 'test',
  Staging = 'staging',
  Production = 'production',
}

export class EnvironmentVariables {
  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;

  @IsEnum(NodeEnvironmentsEnum)
  NODE_ENV: NodeEnvironmentsEnum;

  @IsString()
  DATABASE_HOST: string;

  @IsNumber()
  DATABASE_PORT: number;

  @IsString()
  DATABASE_USERNAME: string;

  @IsString()
  DATABASE_PASSWORD: string;

  @IsString()
  DATABASE_NAME: string;
}

export function validateEnvironmentVariables(config: Record<string, unknown>) {
  const validationResult = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validationResult, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validationResult;
}

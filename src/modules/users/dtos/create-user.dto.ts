import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Max,
  Min,
} from 'class-validator';
import { IUserOnCreation } from '../interfaces/user.interface';

export class CreateUserDto implements IUserOnCreation {
  @IsNotEmpty()
  @IsString()
  @Min(5)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}

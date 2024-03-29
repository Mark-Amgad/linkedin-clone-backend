import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import { IUser, IUserOnCreation } from '../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto implements IUser {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  //@IsStrongPassword()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdAt: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  updatedAt: string;
}

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { IUserOnCreation } from '../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './base-user.dto';
import { PickType, OmitType } from '@nestjs/swagger';

export class CreateUserDto extends OmitType(UserDto, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  //@IsStrongPassword()
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IProfile } from '../interfaces/profile.interface';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class ProfileDto implements IProfile {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)
  userId: string;

  @IsOptional()
  @IsString()
  headline?: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  industry?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsString()
  cover?: string;

  @IsInt()
  numberOfConnections: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdAt: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  updatedAt: string;
}

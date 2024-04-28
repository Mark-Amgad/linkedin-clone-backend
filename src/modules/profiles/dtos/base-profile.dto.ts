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

  @ApiProperty()
  @IsOptional()
  @IsString()
  headline?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  summary?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  industry?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  website?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cover?: string;

  @ApiProperty()
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

import {
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { IPost } from '../interfaces/post.interface';
import { ApiProperty } from '@nestjs/swagger';

export class PostDto implements IPost {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(1023)
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdAt: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  updatedAt: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class PaginationResponseDto<T> {
  @ApiProperty()
  data: T;

  @ApiProperty()
  @IsInt()
  page: number;

  @ApiProperty()
  @IsInt()
  pages: number;

  @ApiProperty()
  @IsInt()
  total: number;

  @ApiProperty()
  @IsInt()
  limit: number;
}

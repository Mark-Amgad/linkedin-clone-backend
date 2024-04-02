import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class QueryPaginationDto {
  @ApiProperty({ required: false, default: 1 })
  @IsNumberString()
  page: number;

  @ApiProperty({ required: false, default: 10 })
  @IsNumberString()
  limit: number;
}

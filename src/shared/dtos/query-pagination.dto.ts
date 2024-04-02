import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class QueryPaginationDto {
  @ApiProperty({ required: true, default: 1 })
  @IsNumberString()
  page: number;

  @ApiProperty({ required: true, default: 10 })
  @IsNumberString()
  limit: number;
}

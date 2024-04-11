import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';
import { QueryPaginationDto } from 'src/shared/dtos/query-pagination.dto';

export class FindAllPostsQueryDto extends QueryPaginationDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID(4)
  userId?: string;
}

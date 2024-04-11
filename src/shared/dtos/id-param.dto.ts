import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class IdDto {
  @ApiProperty()
  @IsUUID(4)
  id: string;
}

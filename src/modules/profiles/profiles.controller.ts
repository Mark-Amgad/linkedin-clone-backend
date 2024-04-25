import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('profiles')
@ApiBearerAuth()
@ApiTags('Profiles')
export class ProfilesController {}

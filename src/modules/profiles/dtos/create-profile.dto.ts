import { PickType } from '@nestjs/swagger';
import { ProfileDto } from './base-profile.dto';

export class CreateProfileDto extends PickType(ProfileDto, ['userId']) {}

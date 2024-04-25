import { PickType } from '@nestjs/swagger';
import { ProfileDto } from './base-profile.dto';

export class UpdateProfileDto extends PickType(ProfileDto, [
  'headline',
  'summary',
  'industry',
  'cover',
  'website',
  'avatar',
]) {}

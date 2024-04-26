import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationResponseDto } from 'src/shared/dtos/pagination-response.dto';
import { ProfileDto } from './dtos/base-profile.dto';
import { FindProfilesListQueryDto } from './dtos/find-profiles-list-query.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
@ApiBearerAuth()
@ApiTags('Profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}
  @Get('/list')
  async getProfilesList(
    @Query() query: FindProfilesListQueryDto,
  ): Promise<PaginationResponseDto<ProfileDto[]>> {
    const { page, limit } = query;

    return await this.profilesService.getProfilesList({ page, limit });
  }
}

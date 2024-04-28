import {
  Body,
  Controller,
  Get,
  Patch,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationResponseDto } from 'src/shared/dtos/pagination-response.dto';
import { ProfileDto } from './dtos/base-profile.dto';
import { FindProfilesListQueryDto } from './dtos/find-profiles-list-query.dto';
import { ProfilesService } from './profiles.service';
import { IdDto } from 'src/shared/dtos/id-param.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RequestWithUser } from 'src/shared/interfaces/request-with-user.interface';

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

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  async updateProfile(
    @Req() request: RequestWithUser,
    @Query() query: IdDto,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<ProfileDto> {
    const id = query.id;
    const userId = request.user.id;
    const profile = await this.profilesService.updateProfileWithId(
      id,
      userId,
      updateProfileDto,
    );
    return profile;
  }
}

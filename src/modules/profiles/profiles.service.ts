import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ProfileDto } from './dtos/base-profile.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from './models/profile.model';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { FindProfilesListQueryDto } from './dtos/find-profiles-list-query.dto';
import { PaginationResponseDto } from 'src/shared/dtos/pagination-response.dto';
import { Transaction } from 'sequelize';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile) private readonly profileModel: typeof Profile,
  ) {}
  async createOne(
    createProfileDto: CreateProfileDto,
    transaction?: Transaction,
  ): Promise<ProfileDto> {
    const profile = await this.profileModel.create(
      {
        userId: createProfileDto.userId,
      },
      { transaction },
    );
    return profile;
  }

  async updateProfileWithId(
    id: string,
    userId: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<ProfileDto> {
    const profile = await this.profileModel.findByPk(id);
    if (!profile) {
      throw new NotFoundException('The Profile is not found');
    }

    if (profile.userId !== userId) {
      throw new UnauthorizedException(
        'You are not authorized to update this profile',
      );
    }
    const [_, profileAfterUpdate] = await this.profileModel.update(
      updateProfileDto,
      { where: { id }, returning: true },
    );

    return profileAfterUpdate[0].toJSON();
  }

  // TODO: should be searchable
  // TODO: should support sort
  // TODO: create the suitable DTOs that accepts search, sort by
  async getProfilesList({
    limit,
    page,
  }: FindProfilesListQueryDto): Promise<PaginationResponseDto<ProfileDto[]>> {
    const { count, rows: profiles } = await this.profileModel.findAndCountAll({
      limit,
      offset: (page - 1) * limit,
    });

    return {
      data: profiles.map((profile) => profile.toJSON()),
      page,
      pages: Math.ceil(count / limit),
      limit,
      total: count,
    };
  }
}

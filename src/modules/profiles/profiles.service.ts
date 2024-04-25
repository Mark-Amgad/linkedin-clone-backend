import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileDto } from './dtos/base-profile.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from './models/profile.model';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile) private readonly profileModel: typeof Profile,
  ) {}
  async createOne(createProfileDto: CreateProfileDto): Promise<ProfileDto> {
    const profile = await this.profileModel.create({
      userId: createProfileDto.userId,
    });
    return profile;
  }

  // TODO: add validation to check the user's update his or her profile
  async updateProfileWithId(
    id: string,
    userId: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<ProfileDto> {
    const [_, profileAfterUpdate] = await this.profileModel.update(
      updateProfileDto,
      { where: { id }, returning: true },
    );

    if (!profileAfterUpdate[0]) {
      throw new NotFoundException('The Profile is not found');
    }
    return profileAfterUpdate[0].toJSON();
  }

  // TODO: should be paginated
  // TODO: should be searchable
  // TODO: should support sort
  // TODO: create the suitable DTOs that accepts search, sort by
  async getProfilesList() {}
}

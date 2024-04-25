import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { Profile } from './models/profile.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Profile])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}

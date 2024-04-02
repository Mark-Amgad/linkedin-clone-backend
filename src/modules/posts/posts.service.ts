import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import { InjectModel } from '@nestjs/sequelize';
import { IPost } from './interfaces/post.interface';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: typeof Post) {}

  // TODO: add pagination here
  async findAll(): Promise<IPost[]> {
    const posts = await this.postModel.findAll();
    return posts;
  }
}

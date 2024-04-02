import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import { InjectModel } from '@nestjs/sequelize';
import { IPost } from './interfaces/post.interface';
import { QueryPaginationDto } from 'src/shared/dtos/query-pagination.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: typeof Post) {}

  async findAll({ page, limit }: QueryPaginationDto): Promise<IPost[]> {
    const posts = await this.postModel.findAll({
      limit,
      offset: (page - 1) * limit,
    });
    return posts;
  }
}

import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import { InjectModel } from '@nestjs/sequelize';
import { IPost } from './interfaces/post.interface';
import { QueryPaginationDto } from 'src/shared/dtos/query-pagination.dto';
import { PostDto } from './dtos/base-post.dto';
import { FindAllPostsQueryDto } from './dtos/find-all-posts-query.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: typeof Post) {}

  async findAll({
    page,
    limit,
    userId,
  }: FindAllPostsQueryDto): Promise<IPost[]> {
    const posts = await this.postModel.findAll({
      where: {
        ...(userId && {
          userId,
        }),
      },
      limit,
      offset: (page - 1) * limit,
    });
    return posts;
  }

  async createOne(userId: string, content: string): Promise<PostDto> {
    const post = await this.postModel.create({ userId, content });
    return post;
  }

  async deleteOne(postId: string, userId: string): string {
    // TODO: check if the post exist
    // TODO: check if the post is owned by the user
    // TODO: delete it
    // TODO: return the id
  }
}

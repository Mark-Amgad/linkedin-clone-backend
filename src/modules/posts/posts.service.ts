import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Post } from './models/post.model';
import { InjectModel } from '@nestjs/sequelize';
import { IPost } from './interfaces/post.interface';
import { QueryPaginationDto } from 'src/shared/dtos/query-pagination.dto';
import { PostDto } from './dtos/base-post.dto';
import { FindAllPostsQueryDto } from './dtos/find-all-posts-query.dto';
import { PaginationResponseDto } from 'src/shared/dtos/pagination-response.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: typeof Post) {}

  async findAll({
    page,
    limit,
    userId,
  }: FindAllPostsQueryDto): Promise<PaginationResponseDto<PostDto[]>> {
    const { rows, count } = await this.postModel.findAndCountAll({
      where: {
        ...(userId && {
          userId,
        }),
      },
      limit,
      offset: (page - 1) * limit,
    });

    return {
      data: rows.map((row) => row.toJSON()),
      limit,
      page,
      pages: Math.ceil(count / limit),
      total: count,
    };
  }

  async createOne(userId: string, content: string): Promise<PostDto> {
    const post = await this.postModel.create({ userId, content });
    return post;
  }

  async deleteOne(postId: string, userId: string): Promise<string> {
    const post = await this.postModel.findByPk(postId);
    if (!post) {
      throw new NotFoundException('The post is not found');
    }

    if (post.userId !== userId) {
      throw new UnauthorizedException(
        'You are not authorized to delete this post',
      );
    }
    await this.postModel.destroy({
      where: { id: postId, userId },
    });

    return postId;
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPost } from './interfaces/post.interface';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';
import { QueryPaginationDto } from 'src/shared/dtos/query-pagination.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  async findAll(@Query() query: QueryPaginationDto): Promise<IPost[]> {
    const { page = 1, limit = 10 } = query;
    return this.postsService.findAll({ page, limit });
  }
}

// TODO: write the migration file for posts

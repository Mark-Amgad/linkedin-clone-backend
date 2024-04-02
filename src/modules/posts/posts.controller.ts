import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPost } from './interfaces/post.interface';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  async findAll(): Promise<IPost[]> {
    return this.postsService.findAll();
  }
}

// TODO: write the migration file for posts

import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPost } from './interfaces/post.interface';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  // TODO: add service (inject service)
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  // TODO : look at this part again
  @ApiOkResponse({ type: Post })
  async findAll(): Promise<IPost[]> {
    return this.postsService.findAll();
  }
}

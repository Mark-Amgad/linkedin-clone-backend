import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPost } from './interfaces/post.interface';
import { Post as PostModel } from './models/post.model';
import { PostsService } from './posts.service';
import { QueryPaginationDto } from 'src/shared/dtos/query-pagination.dto';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostDto } from './dtos/base-post.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RequestWithUser } from 'src/shared/interfaces/request-with-user.interface';
import { FindAllPostsQueryDto } from './dtos/find-all-posts-query.dto';

@ApiTags('Posts')
@ApiBearerAuth()
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  async findAll(@Query() query: FindAllPostsQueryDto): Promise<PostDto[]> {
    const { page = 1, limit = 10, userId } = query;
    return this.postsService.findAll({ page, limit, userId });
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async createOne(
    @Body() createPostDto: CreatePostDto,
    @Req() request: RequestWithUser,
  ): Promise<PostDto> {
    const { content } = createPostDto;
    const userId = request.user.id;
    return this.postsService.createOne(userId, content);
  }
}

import { PickType } from '@nestjs/swagger';
import { PostDto } from './base-post.dto';

export class CreatePostDto extends PickType(PostDto, ['content']) {}

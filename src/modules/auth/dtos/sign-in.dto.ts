import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/users/dtos/create-user.dto';

export class SignInDto extends PickType(CreateUserDto, ['email', 'password']) {}

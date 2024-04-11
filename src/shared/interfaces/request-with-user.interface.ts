import { Request } from 'express';
import { ITokenPayload } from 'src/modules/auth/interfaces/token-payload.interface';

export interface RequestWithUser extends Request {
  user: ITokenPayload;
}

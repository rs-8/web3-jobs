import { Request } from 'express';
import { User } from 'src/modules/users/user.entity';

export interface UserRequest extends Request {
  user: User;
}

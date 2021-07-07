import { UserModel } from './users.model';

export interface PostModel {
  userId: number;
  user?: UserModel;
  id: number;
  title: string;
  body: string;
}

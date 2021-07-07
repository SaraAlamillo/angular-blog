import { PostModel } from './posts.model';

export interface CommentModel {
  postId: number;
  post?: PostModel;
  id: number;
  name: string;
  email: string;
  body: string;
}

import { UserModel } from './users.model';

export interface TodoModel {
  userId: number;
  user?: UserModel;
  id: number;
  title: string;
  completed: boolean;
}

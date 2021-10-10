import { IUser } from '../auth/types';

export interface ILastLogin {
  id: string;
  userId: string;
  loggedInAt: string;
  user: IUser;
}

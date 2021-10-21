import { IUser } from '../auth/types';

export interface InitialState {
  item: Item;
}

export interface Item {
  id: string;
  name: string;
  filters: { [key: string]: string | string[] };
  prospectsAvailable: number;
  lastAuthor: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface SavedListResponse extends InitialState {}

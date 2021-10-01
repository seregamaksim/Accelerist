import { IUser } from '../auth/types';

export interface InitialState {
  items: Item[];
  meta: {
    currentPage: string;
    itemCount: number;
    itemsPerPage: string;
    totalItems: number;
    totalPages: number;
  };
}

export interface Item {
  id: string;
  name: string;
  filters: {};
  prospectsAvailable: number;
  lastAuthor: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface QueryParams {
  page: number;
  limit: number;
  sort?: string;
}

export interface SavedListResponse extends InitialState {}

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
  filters: Filters;
  prospectsAvailable: number;
  lastAuthor: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface QueryParams {
  page: number;
  limit: number;
  sort: 'alphabet' | 'last-activity' | 'available' | string | null;
}

export interface Filters {
  [key: string]: string | string[];
}
export interface SavedListResponse extends InitialState {}

export interface ExcelResponse {
  name: string;
  file: string;
}

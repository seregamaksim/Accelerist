import { IUser } from '../auth/types';
import { Company } from '../companies/types';

export interface InitialState {
  items: Company[];
  meta: {
    currentPage: string;
    itemCount: number;
    itemsPerPage: string;
    totalItems: number;
    totalPages: number;
  };
}

export interface QueryParams {
  page: number;
  limit: number;
}

export interface FavoriteCompaniesResponse extends InitialState {}

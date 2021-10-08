import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { QueryParams, FavoriteCompaniesResponse } from './types';

export const fetchFavoritesList = createAsyncThunk(
  'companies/favoritesList',
  async (query: QueryParams) => {
    const url = `/companies/favorites?page=${query.page}&limit=${query.limit}`;
    const { data }: AxiosResponse<FavoriteCompaniesResponse> = await http.get(
      url
    );

    return data;
  }
);

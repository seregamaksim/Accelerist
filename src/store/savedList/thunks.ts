import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { QueryParams, SavedListResponse } from './types';

export const fetchSavedList = createAsyncThunk(
  'savedList/fetchList',
  async (query: QueryParams) => {
    const url =
      `/saved-list?page=${query.page}&limit=${query.limit}` +
      (query.sort ? `&sort=${query.sort}` : '');
    const { data }: AxiosResponse<SavedListResponse> = await http.get(url);

    return data;
  }
);

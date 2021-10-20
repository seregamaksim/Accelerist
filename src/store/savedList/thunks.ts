import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { QueryParams, SavedListResponse } from './types';
import qs from 'qs';

export const fetchSavedList = createAsyncThunk(
  'savedList/fetchList',
  async (query: QueryParams) => {
    const params = qs.stringify(query);
    const url = `/saved-list?${params}`;
    const { data }: AxiosResponse<SavedListResponse> = await http.get(url);

    return data;
  }
);

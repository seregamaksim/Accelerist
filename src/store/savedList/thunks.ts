import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import {
  ExcelResponse,
  Filters,
  Item,
  QueryParams,
  SavedListResponse,
} from './types';
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
export const updateSavedList = createAsyncThunk(
  'savedList/updateList',
  async (body: any) => {
    // const params = qs.stringify(query);
    const url = `/saved-list/${body.id}`;
    const { data }: AxiosResponse<SavedListResponse> = await http.patch(
      url,
      body.values
    );

    return data;
  }
);
export const downloadExcel = createAsyncThunk(
  'savedList/downloadExcel',
  async (id: string) => {
    const url = `/saved-list/${id}/excel`;
    const data: any = await http.get(url, {
      responseType: 'blob',
    });

    return data;
  }
);

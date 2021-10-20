import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import qs from 'qs';
import { http } from '../../services/http';
import { QueryParams, CompaniesResponse } from './types';

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (query: any) => {
    const params = qs.stringify(query);
    const url = `/companies?${params}`;
    const { data }: AxiosResponse<CompaniesResponse> = await http.get(url);

    return data;
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { Company } from '../companies/types';

export const fetchCompany = createAsyncThunk(
  'companyProfile/getCompany',
  async (id: string) => {
    const url = `/companies/${id}`;
    const { data }: AxiosResponse<Company> = await http.get(url);

    return data;
  }
);

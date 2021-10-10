import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { ILastLogin } from './types';

export const fetchLastLogins = createAsyncThunk(
  'lastLogins/fetchLastLogins',
  async () => {
    const { data }: AxiosResponse<ILastLogin[]> = await http.get(
      '/team/last_logins/'
    );

    return data;
  }
);

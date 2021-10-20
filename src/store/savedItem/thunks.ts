import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { Item } from './types';

export const fetchSavedItem = createAsyncThunk(
  'savedItem/fetchItem',
  async (id: string) => {
    const url = `/saved-list/${id}`;
    const { data }: AxiosResponse<Item> = await http.get(url);

    return data;
  }
);

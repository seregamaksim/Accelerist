import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { TeamResponse } from './types';

export const fetchTeam = createAsyncThunk('team/fetchTeam', async () => {
  const { data }: AxiosResponse<TeamResponse> = await http.get('/team/');

  return data;
});

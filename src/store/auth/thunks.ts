import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../services/http';

export const signUpPost = createAsyncThunk(
  'auth/signUp',
  async (values: any) => {
    // console.log('post', values);
    const response = await http.post('/auth/sign_up/', values);
    return response.data;
  }
);

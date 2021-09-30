import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ILoginFormValues } from '../../components/LoginForm';
import { IRegistrationFormValues } from '../../components/RegisterForm';
import { http } from '../../services/http';
import { IAuthResponse } from './types';

export const signUpPost = createAsyncThunk(
  'auth/signUp',
  async (values: IRegistrationFormValues) => {
    const { data }: AxiosResponse<IAuthResponse> = await http.post(
      '/auth/sign_up/',
      values
    );
    return data;
  }
);

export const signInPost = createAsyncThunk(
  'auth/signIn',
  async (values: ILoginFormValues) => {
    const { data }: AxiosResponse<IAuthResponse> = await http.post(
      '/auth/sign_in/',
      values
    );
    console.log(data);

    return data;
  }
);

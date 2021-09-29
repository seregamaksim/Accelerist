import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginFormValues } from '../../components/LoginForm';
import { IRegistrationFormValues } from '../../components/RegisterForm';
import { http } from '../../services/http';

export const signUpPost = createAsyncThunk(
  'auth/signUp',
  async (values: IRegistrationFormValues) => {
    const response = await http.post('/auth/sign_up/', values);
    return response.data;
  }
);

export const signInPost = createAsyncThunk(
  'auth/signIn',
  async (values: ILoginFormValues) => {
    const response = await http.post('/auth/sign_in/', values);
    return response.data;
  }
);

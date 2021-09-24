import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { http } from '../../services/http';

const initialState = {
  data: [],
};

export const signUpPost = createAsyncThunk('auth/signUp', async (values) => {
  const response = await http.post('/auth/sign_up', values);
  return response.data;
});
const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signInSuccess(state) {
      console.log('as');
    },
    signUpSuccess(state) {
      console.log('as');
    },
    signOut(state) {
      console.log('as');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpPost.fulfilled, (state, action) => {
      console.log('action', action);
    });
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };

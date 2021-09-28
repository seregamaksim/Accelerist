import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { http } from '../../services/http';

import { signUpPost } from './thunks';

const initialState = {
  token: '',
  user: {},
};

// const signUpPost = createAsyncThunk('auth/signUp', async (values: any) => {
//   const response = await http.post('/auth/sign_up', values);
//   return response.data;
// });
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
      state.token = '';
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpPost.fulfilled, (state, { payload }) => {
      state.token = payload.accessToken;
      state.user = payload.user;
      console.log('state', state);

      // console.log('action', action);
    });
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };

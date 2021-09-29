import { createSlice } from '@reduxjs/toolkit';

import { signUpPost, signInPost } from './thunks';

const initialState = {
  token: '',
  isAuthorized: false,
  user: {},
};

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
      state.isAuthorized = false;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpPost.fulfilled, (state, { payload }) => {
        state.token = payload.accessToken;
        state.user = payload.user;
        state.isAuthorized = true;
      })
      .addCase(signInPost.fulfilled, (state, { payload }) => {
        state.token = payload.accessToken;
        state.user = payload.user;
        state.isAuthorized = true;
      });
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };

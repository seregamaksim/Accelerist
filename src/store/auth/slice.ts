import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signUpPost, signInPost } from './thunks';
import { IAuthResponse, IIntialState } from './types';

const initialState: IIntialState = {
  token: '',
  isAuthorized: false,
  user: null,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signOut(state) {
      state.token = '';
      state.isAuthorized = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        signUpPost.fulfilled,
        (state, { payload }: PayloadAction<IAuthResponse>) => {
          state.token = payload.accessToken;
          state.user = payload.user;
          state.isAuthorized = true;
        }
      )
      .addCase(
        signInPost.fulfilled,
        (state, { payload }: PayloadAction<IAuthResponse>) => {
          state.token = payload.accessToken;
          state.user = payload.user;
          state.isAuthorized = true;
        }
      );
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };

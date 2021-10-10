import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLastLogins } from './thunks';
import { ILastLogin } from './types';

const initialState: ILastLogin[] = [];

const lastLogins = createSlice({
  initialState,
  name: 'lastLogins',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchLastLogins.fulfilled,
      (state, { payload }: PayloadAction<ILastLogin[]>) => {
        return payload;
      }
    );
  },
});

const actions = { ...lastLogins.actions };
const reducer = lastLogins.reducer;

export { actions, reducer };

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeam } from './thunks';
import { InitialState, Team, TeamResponse } from './types';

const initialState: InitialState = {
  team: null,
};

const teamSlice = createSlice({
  initialState,
  name: 'team',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTeam.fulfilled,
      (state, { payload }: PayloadAction<TeamResponse>) => {
        state.team = payload;
      }
    );
  },
});

const actions = { ...teamSlice.actions };
const reducer = teamSlice.reducer;

export { actions, reducer };

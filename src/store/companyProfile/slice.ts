import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from '../companies/types';
import { fetchCompany } from './thunks';
import { InitialState } from './types';

const initialState: InitialState = {
  company: {} as Company,
  fetchStatus: 'idle',
};

const companyProfileSlice = createSlice({
  initialState,
  name: 'companyProfile',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompany.pending, (state, action) => {
        state.fetchStatus = 'pending';
      })
      .addCase(
        fetchCompany.fulfilled,
        (state, { payload }: PayloadAction<Company>) => {
          state.fetchStatus = 'fulfilled';
          state.company = payload;
        }
      );
  },
});

const actions = { ...companyProfileSlice.actions };
const reducer = companyProfileSlice.reducer;

export { actions, reducer };

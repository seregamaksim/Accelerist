import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from '../companies/types';
import { fetchCompany } from './thunks';
import { InitialState } from './types';

const initialState: InitialState = {
  company: {} as Company,
};

const companyProfileSlice = createSlice({
  initialState,
  name: 'companyProfile',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCompany.fulfilled,
      (state, { payload }: PayloadAction<Company>) => {
        console.log('company', payload);

        state.company = payload;
      }
    );
  },
});

const actions = { ...companyProfileSlice.actions };
const reducer = companyProfileSlice.reducer;

export { actions, reducer };

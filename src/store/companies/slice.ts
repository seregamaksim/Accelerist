import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCompanies } from './thunks';

import { InitialState, CompaniesResponse } from './types';

const initialState: InitialState = {
  items: [],
  meta: {
    currentPage: '1',
    itemCount: 0,
    itemsPerPage: '1',
    totalItems: 0,
    totalPages: 0,
  },
};

const companiesSlice = createSlice({
  initialState,
  name: 'companies',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCompanies.fulfilled,
      (state, { payload }: PayloadAction<CompaniesResponse>) => {
        state.items = payload.items;
        state.meta = payload.meta;
      }
    );
  },
});

const actions = { ...companiesSlice.actions };
const reducer = companiesSlice.reducer;

export { actions, reducer };

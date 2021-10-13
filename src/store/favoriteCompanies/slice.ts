import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFavoritesList } from './thunks';
import { InitialState, FavoriteCompaniesResponse } from './types';

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

const favoriteCompanies = createSlice({
  initialState,
  name: 'favoriteCompanies',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchFavoritesList.fulfilled,
      (state, { payload }: PayloadAction<FavoriteCompaniesResponse>) => {
        console.log('payload.meta', payload.meta);

        state.items = payload.items;
        state.meta = payload.meta;
      }
    );
  },
});

const actions = { ...favoriteCompanies.actions };
const reducer = favoriteCompanies.reducer;

export { actions, reducer };

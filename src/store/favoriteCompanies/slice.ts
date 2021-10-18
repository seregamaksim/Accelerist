import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dislikeCompany, fetchFavoritesList, likeCompany } from './thunks';
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
  reducers: {
    removeItem: (state, { payload }: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    // addItem : (state, {payload}: PayloadAction) => {

    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchFavoritesList.fulfilled,
        (state, { payload }: PayloadAction<FavoriteCompaniesResponse>) => {
          state.items = payload.items;
          state.meta = payload.meta;
        }
      )
      .addCase(
        likeCompany.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          console.log('like', payload);
        }
      )
      .addCase(
        dislikeCompany.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          console.log('dislike', payload);
        }
      );
  },
});

const actions = { ...favoriteCompanies.actions };
const reducer = favoriteCompanies.reducer;

export { actions, reducer };

import { RootState } from '../store';

export const selectFavoritesList = (state: RootState) =>
  state.favoriteCompanies.items;
export const selectTotalCount = (state: RootState) =>
  state.favoriteCompanies.meta.totalItems;

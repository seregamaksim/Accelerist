import { RootState } from '../store';

export const selectFavoritesList = (state: RootState) =>
  state.favoriteCompanies.items;
export const selectMeta = (state: RootState) => state.favoriteCompanies.meta;

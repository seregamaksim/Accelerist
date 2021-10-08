import { RootState } from '../store';

export const selectFavoritesList = (state: RootState) =>
  state.favoriteCompanies.items;

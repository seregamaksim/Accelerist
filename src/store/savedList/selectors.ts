import { RootState } from '../store';

export const selectSavedList = (state: RootState) => state.savedList.items;

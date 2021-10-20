import { RootState } from '../store';

export const selectSavedItem = (state: RootState) => state.savedItem.item;

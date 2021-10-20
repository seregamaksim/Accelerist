import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSavedItem } from './thunks';
import { InitialState, Item } from './types';

const initialState: InitialState = {
  item: {} as Item,
};

const savedItemSlice = createSlice({
  initialState,
  name: 'savedItem',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSavedItem.fulfilled,
      (state, { payload }: PayloadAction<Item>) => {
        state.item = payload;
      }
    );
  },
});

const actions = { ...savedItemSlice.actions };
const reducer = savedItemSlice.reducer;

export { actions, reducer };

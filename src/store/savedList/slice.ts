import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSavedList } from './thunks';
import { InitialState, SavedListResponse } from './types';

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

const savedListSlice = createSlice({
  initialState,
  name: 'savedList',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSavedList.fulfilled,
      (state, { payload }: PayloadAction<SavedListResponse>) => {
        console.log('payload', payload);
        state.items = payload.items;
        state.meta = payload.meta;
      }
    );
  },
});

const actions = { ...savedListSlice.actions };
const reducer = savedListSlice.reducer;

export { actions, reducer };

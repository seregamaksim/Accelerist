import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { downloadExcel, fetchSavedList, updateSavedList } from './thunks';
import { ExcelResponse, InitialState, SavedListResponse } from './types';

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
    builder
      .addCase(
        fetchSavedList.fulfilled,
        (state, { payload }: PayloadAction<SavedListResponse>) => {
          state.items = payload.items;
          state.meta = payload.meta;
        }
      )
      .addCase(
        updateSavedList.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          state.items = payload.items;
          state.meta = payload.meta;
        }
      );
  },
});

const actions = { ...savedListSlice.actions };
const reducer = savedListSlice.reducer;

export { actions, reducer };

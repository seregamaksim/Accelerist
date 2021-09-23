import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signInSuccess(state) {},
    signUpSuccess(state) {},
    signOut(state) {},
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchData.fulfilled, (state, action) => {
    //   console.log('action', action);
    // });
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };

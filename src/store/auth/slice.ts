import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  data: [],
};
export const fetchData = createAsyncThunk('auth/getData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  return response.json();
});
const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signInSuccess(state) {},
    signUpSuccess(state) {},
    signOut(state) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log('action', action);
    });
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };

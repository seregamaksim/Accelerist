import { RootState } from '../store';

export const getToken = (state: RootState) => state.auth.token;

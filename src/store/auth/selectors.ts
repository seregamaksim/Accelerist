import { RootState } from '../store';

export const getToken = (state: RootState) => state.auth.token;
export const isAuthohorized = (state: RootState) => state.auth.isAuthorized;

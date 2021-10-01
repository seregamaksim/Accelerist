import { RootState } from '../store';

export const getToken = (state: RootState) => state.auth.token;
export const isAuthohorized = (state: RootState) => state.auth.isAuthorized;
export const getAvatarKey = (state: RootState) => state.auth.user?.avatarKey;
export const getUserName = (state: RootState) => ({
  firstName: state.auth.user?.firstName,
  lastName: state.auth.user?.lastName,
});

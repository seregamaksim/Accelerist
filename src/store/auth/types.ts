export interface IIntialState {
  token: string;
  user: IUser | null;
  isAuthorized: boolean;
}
export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}
export interface IUser {
  avatarKey: string | null;
  createdAt: string;
  deletedAt: string | null;
  email: string;
  firstName: string | null;
  id: string;
  imported: boolean;
  isAuthorized: boolean;
  isReceivingNotifications: boolean;
  lastName: string | null;
  linkedinLink: string | null;
  loggedInAt: string;
  role: string;
  teamId: string;
  updatedAt: string;
}

import { RootState } from '../store';

export const selectCompany = (state: RootState) => state.companyProfile.company;
export const selectFetchStatus = (state: RootState) =>
  state.companyProfile.fetchStatus;

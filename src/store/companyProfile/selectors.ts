import { RootState } from '../store';

export const selectCompany = (state: RootState) => state.companyProfile.company;

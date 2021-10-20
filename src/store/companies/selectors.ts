import { RootState } from '../store';

export const selectCompanies = (state: RootState) => state.companies.items;
export const selectCompaniesMeta = (state: RootState) => state.companies.meta;

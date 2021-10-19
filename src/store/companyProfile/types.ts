import { Company } from '../companies/types';

export interface InitialState {
  company: Company;
  fetchStatus: string;
}

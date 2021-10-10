import { IUser } from '../auth/types';

export interface InitialState {
  team: Team | null;
}
export interface Team {
  id: string;
  ownerId: string;
  catalistId: string | null;
  organizationName: string | null;
  logoKey: string | null;
  numberConstituents: string | null;
  email: string | null;
  annualTotalContributions: string | null;
  aieldActivity: string | null;
  twitterLink: string | null;
  twitterHandle: string | null;
  linkedinLink: string | null;
  contactName: string | null;
  contactPhone: string | null;
  contactWebsite: string | null;
  goalAlignment: [] | any[];
  typesOfInvestment: string | null;
  address: string | null;
  state: string | null;
  city: string | null;
  zip: string | null;
  affinities: string | null;
  primaryMissionFocus: string | null;
  secondaryMissionFocus: string | null;
  employeeEngagementOpportunities: boolean;
  opportunities: string | null;
  impactStatements: string | null;
  income: string | null;
  age: string | null;
  brands: string | null;
  ethnicity: string | null;
  genders: string | null;
  purchase: string | null;
  nonprofit: string | null;
  interests: string | null;
  affiliation: string | null;
  searchCount: number;
  pitchCount: number;
  owner: IUser;
  members: IUser[];
  charitablePartners: [];
}

export interface TeamResponse extends Team {}

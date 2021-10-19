export interface InitialState {
  items: Company[];
  meta: {
    currentPage: string;
    itemCount: number;
    itemsPerPage: string;
    totalItems: number;
    totalPages: number;
  };
}

export interface Company {
  id: string;
  zoomInfoId: string | null;
  name: string;
  logo: string | null;
  ticker: string | null;
  parentCompany: string | null;
  phone: string;
  fax: string;
  website: string;
  city: string;
  street: string;
  state: string;
  zipCode: string;
  country: string;
  continent: string | null;
  productsBrandDescription: string | null;
  descriptionList: string;
  revenueRange: string;
  employeeRange: string;
  twitterHandle: string | null;
  socialMediaUrls: string | null;
  competitors: string | null;
  subUnitIndustries: string | null;
  primaryIndustry: string[];
  industries: string | null;
  revenue: string;
  employeeCount: number;
  annualContributions: string | null;
  cashContributions: string | null;
  inKindContributions: string | null;
  employeeContributions: string | null;
  parentId: string;
  parentName: string | null;
  type: string | null;
  sdgGoals: [];
  genders: string | null;
  income: string | null;
  age: string | null;
  ethnicity: string | null;
  nonprofit: string | null;
  purchase: string | null;
  affiliation: string | null;
  brands: string | null;
  interests: string | null;
  typesOfInvestment: string[] | null;
  errorLoadZoomInfo: string | null;
  charitablePartners: [] | any[];
  statusZoomInfo: string;
  loadZoomInfoDate: string | null;
  errorLoadZoomInfoDate: string | null;
  partnershipLink: string | null;
  employeeEngagementOpportunities: true;
  similarCompanies: string[];
  favoriteCompanies: IFavoritesCompany[] | [];
  score: number;
  like: boolean;
  crsFocus: [];
}
export interface IFavoritesCompany {
  id: string;
  companyId: string;
  userId: string;
}
export interface QueryParams {
  page: number;
  limit: number;
}

export interface SavedListResponse extends InitialState {}

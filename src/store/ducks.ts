import { combineReducers } from 'redux';

import * as auth from './auth';
import * as savedList from './savedList';
import * as companies from './companies';
import * as favoriteCompanies from './favoriteCompanies';
import * as team from './team';
import * as lastLogins from './lastLogins';
import * as companyProfile from './companyProfile';

export const reducer = combineReducers({
  auth: auth.reducer,
  savedList: savedList.reducer,
  companies: companies.reducer,
  favoriteCompanies: favoriteCompanies.reducer,
  team: team.reducer,
  lastLogins: lastLogins.reducer,
  companyProfile: companyProfile.reducer,
});

export const actions = {
  auth: auth.actions,
  savedList: savedList.actions,
  companies: companies.actions,
  favoriteCompanies: favoriteCompanies.actions,
  team: team.actions,
  lastLogins: lastLogins.actions,
  companyProfile: companyProfile.actions,
};

export const selectors = {
  auth: auth.selectors,
  savedList: savedList.selectors,
  companies: companies.selectors,
  favoriteCompanies: favoriteCompanies.selectors,
  team: team.selectors,
  lastLogins: lastLogins.selectors,
  companyProfile: companyProfile.selectors,
};

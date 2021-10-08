import { combineReducers } from 'redux';

import * as auth from './auth';
import * as savedList from './savedList';
import * as companies from './companies';
import * as favoriteCompanies from './favoriteCompanies';

export const reducer = combineReducers({
  auth: auth.reducer,
  savedList: savedList.reducer,
  companies: companies.reducer,
  favoriteCompanies: favoriteCompanies.reducer,
});

export const actions = {
  auth: auth.actions,
  savedList: savedList.actions,
  companies: companies.actions,
  favoriteCompanies: favoriteCompanies.actions,
};

export const selectors = {
  auth: auth.selectors,
  savedList: savedList.selectors,
  companies: companies.selectors,
  favoriteCompanies: favoriteCompanies.selectors,
};

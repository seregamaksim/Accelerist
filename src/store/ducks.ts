import { combineReducers } from 'redux';

import * as auth from './auth';
import * as savedList from './savedList';
import * as companies from './companies';

export const reducer = combineReducers({
  auth: auth.reducer,
  savedList: savedList.reducer,
  companies: companies.reducer,
});

export const actions = {
  auth: auth.actions,
  savedList: savedList.actions,
  companies: companies.actions,
};

export const selectors = {
  auth: auth.selectors,
  savedList: savedList.selectors,
  companies: companies.selectors,
};

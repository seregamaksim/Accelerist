import { combineReducers } from 'redux';

import * as auth from './auth';
import * as savedList from './savedList';

export const reducer = combineReducers({
  auth: auth.reducer,
  savedList: savedList.reducer,
});

export const actions = {
  auth: auth.actions,
  savedList: savedList.actions,
};

export const selectors = {
  auth: auth.selectors,
  savedList: savedList.selectors,
};

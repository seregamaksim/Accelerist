import { AnyAction, Dispatch } from 'redux';
import { REHYDRATE } from 'redux-persist';
import { http } from '../../services/http';
import { signInPost, signUpPost } from '../auth/thunks';

import { actions } from '../ducks';

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    if (
      action.type === signInPost.fulfilled.type ||
      action.type === signUpPost.fulfilled.type
    ) {
      action.payload?.token &&
        http.setAuthorizationHeader(action.payload.token);
    }

    if (action.type === REHYDRATE) {
      action.payload?.auth?.token &&
        http.setAuthorizationHeader(action.payload.auth.token);
    }

    if (action.type === actions.auth.signOut.type) {
      http.unsetAuthorizationHeader();
    }

    return next(action);
  };

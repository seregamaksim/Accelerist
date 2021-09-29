import { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';

export default function PrivateRoute({ children, ...rest }: any) {
  let history = useHistory();
  const isAuthohorized = useAppSelector(selectors.auth.isAuthohorized);
  useEffect(() => {
    if (isAuthohorized) {
      history.push(rest.location.pathname);
    }
  }, [isAuthohorized]);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthohorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

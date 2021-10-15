import { useEffect } from 'react';
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';

interface IPrivateRouteProps {
  path: string;
  children: JSX.Element;
  exact?: boolean;
}

const PrivateRoute = ({ children, ...rest }: IPrivateRouteProps) => {
  const history = useHistory();
  const location = useLocation();
  const isAuthohorized = useAppSelector(selectors.auth.isAuthohorized);
  useEffect(() => {
    if (isAuthohorized) {
      history.push(`${location.pathname}${location.search}`);
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
};

export default PrivateRoute;

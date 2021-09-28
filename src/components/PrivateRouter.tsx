import { Route, Redirect } from 'react-router-dom';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';
// import useAuth from './useAuth'

export default function PrivateRoute({ children, ...rest }: any) {
  const isToken = useAppSelector(selectors.auth.getToken);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isToken.length > 0 ? (
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

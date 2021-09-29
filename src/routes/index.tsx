import { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRouter';
import SignUp from '../components/SignUp';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';

export default function Routes() {
  let history = useHistory();
  const isAuthohorized = useAppSelector(selectors.auth.isAuthohorized);
  useEffect(() => {
    if (isAuthohorized) {
      console.log('isAuthohorized');

      history.push('/');
    }
  }, [isAuthohorized]);
  return (
    <Switch>
      {/* <UserRoutes /> */}
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* <AuthRoutes /> */}
    </Switch>
  );
}

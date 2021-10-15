import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import PrivateRoute from '../components/PrivateRouter';
import SignUp from '../pages/SignUp';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';
import CompanyFavorites from '../pages/CompanyFavorites';
import CompanyProfile from '../pages/CompanyProfile';

export default function Routes() {
  const isAuthohorized = useAppSelector(selectors.auth.isAuthohorized);
  return (
    <Switch>
      <Route exact path="/">
        {isAuthohorized ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/favorites">
        <CompanyFavorites />
      </PrivateRoute>
      <PrivateRoute path="/company/:id">
        <CompanyProfile />
      </PrivateRoute>
      <Route path="/signup">
        {isAuthohorized ? <Redirect to="/dashboard" /> : <SignUp />}
      </Route>
      <Route path="/login">
        {isAuthohorized ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
    </Switch>
  );
}

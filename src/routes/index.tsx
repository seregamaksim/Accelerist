import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

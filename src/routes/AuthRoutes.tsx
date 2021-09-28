import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';

export default function AuthRoutes() {
  console.log('auth');

  return (
    <>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

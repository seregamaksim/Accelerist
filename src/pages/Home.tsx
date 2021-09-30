import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { actions } from '../store/ducks';
import { useAppDispatch } from '../store/hooks';

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <>
      <h1>Home</h1>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={() => dispatch(actions.auth.signOut())}>Exit</button>
    </>
  );
}

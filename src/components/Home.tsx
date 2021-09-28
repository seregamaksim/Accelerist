import { useEffect } from 'react';
import { actions } from '../store/ducks';
import { useAppDispatch } from '../store/hooks';

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => dispatch(actions.auth.signOut())}>Exit</button>
    </>
  );
}

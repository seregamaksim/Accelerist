import { useEffect } from 'react';
import { fetchData } from '../store/auth/slice';
import { useAppDispatch } from '../store/hooks';

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return <h1>Home</h1>;
}

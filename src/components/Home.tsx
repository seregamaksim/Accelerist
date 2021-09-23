import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);
  return <h1>Home</h1>;
}

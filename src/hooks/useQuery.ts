import { useLocation } from 'react-router';

export function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

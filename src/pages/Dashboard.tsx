import { ThemeProvider } from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { actions } from '../store/ducks';
import { useAppDispatch } from '../store/hooks';
import { theme } from '../theme';
import Button from '../ui/Button';
import SubHeader from '../components/SubHeader';
import { useEffect } from 'react';
import { fetchSavedList } from '../store/savedList/thunks';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const querySavedList = {
    page: 1,
    limit: 2,
  };

  useEffect(() => {
    dispatch(fetchSavedList(querySavedList));
  }, [dispatch]);
  return (
    <MainLayout>
      <SubHeader title="Dashboard"></SubHeader>
    </MainLayout>
  );
}

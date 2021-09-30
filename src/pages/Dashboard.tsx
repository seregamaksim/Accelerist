import { ThemeProvider } from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { actions } from '../store/ducks';
import { useAppDispatch } from '../store/hooks';
import { theme } from '../theme';
import Button from '../ui/Button';
import SubHeader from '../components/SubHeader';

export default function Dashboard() {
  const dispatch = useAppDispatch();

  return (
    <MainLayout>
      <SubHeader title="Dashboard"></SubHeader>
      <ThemeProvider theme={theme.primary}>
        <Button
          text="Log Out"
          type="button"
          onClick={() => dispatch(actions.auth.signOut())}
        />
      </ThemeProvider>
    </MainLayout>
  );
}

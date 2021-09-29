import { ThemeProvider } from 'styled-components';
import { actions } from '../store/ducks';
import { useAppDispatch } from '../store/hooks';
import { theme } from '../theme';
import Button from '../ui/Button';

export default function Dashboard() {
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Dashboard</h1>
      <ThemeProvider theme={theme.primary}>
        <Button
          text="Log Out"
          type="button"
          onClick={() => dispatch(actions.auth.signOut())}
        />
      </ThemeProvider>
    </>
  );
}

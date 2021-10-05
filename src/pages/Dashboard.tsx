import styled, { ThemeProvider } from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { actions } from '../store/ducks';
import { useAppDispatch } from '../store/hooks';
import SubHeader from '../components/SubHeader';
import { useEffect } from 'react';
import { fetchSavedList } from '../store/savedList/thunks';
import SavedList from '../components/SavedList';
import Container from '../components/Container';

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
      <StyledSubHeader title="Dashboard" />
      <Container>
        <Wrapper>
          <SavedList />
        </Wrapper>
      </Container>
    </MainLayout>
  );
}
const Wrapper = styled.div`
  max-width: 1096px;
`;
const StyledSubHeader = styled(SubHeader)`
  margin-bottom: 32px;
`;

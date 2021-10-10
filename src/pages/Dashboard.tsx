import styled, { ThemeProvider } from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { actions } from '../store/ducks';
import { useAppDispatch } from '../store/hooks';
import SubHeader from '../components/SubHeader';
import { useEffect } from 'react';
import { fetchSavedList } from '../store/savedList/thunks';
import SavedList from '../components/SavedList';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import FavoritesList from '../components/FavoritesList';
import Reports from '../components/Reports';

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
          <DashboardBlock twoColumns={true}>
            <DashboardBlockHead>
              <DashboardBlockHeadTitle>
                Prospecting Sessions
              </DashboardBlockHeadTitle>
              <DashboardBlockHeadLink to="/prospects">
                see more
              </DashboardBlockHeadLink>
            </DashboardBlockHead>
            <SavedList />
          </DashboardBlock>
          <DashboardBlock>
            <DashboardBlockHead>
              <DashboardBlockHeadTitle>Favorites</DashboardBlockHeadTitle>
              <DashboardBlockHeadLink to="/favorites">
                see more
              </DashboardBlockHeadLink>
            </DashboardBlockHead>
            <FavoritesList miniCards />
          </DashboardBlock>
          <DashboardBlock>
            <DashboardBlockHead>
              <DashboardBlockHeadTitle>Reports</DashboardBlockHeadTitle>
            </DashboardBlockHead>
            <Reports />
          </DashboardBlock>
        </Wrapper>
      </Container>
    </MainLayout>
  );
}
const Wrapper = styled.div`
  max-width: 1096px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 24px;
  padding-bottom: 50px;
`;
const StyledSubHeader = styled(SubHeader)`
  margin-bottom: 32px;
`;
const DashboardBlock = styled.div<{ twoColumns?: boolean }>`
  grid-column: ${(props) => (props.twoColumns ? 'span 2' : '')};
`;
const DashboardBlockHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const DashboardBlockHeadTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--black);
`;
const DashboardBlockHeadLink = styled(Link)`
  font-size: 12px;
  line-height: 18px;
  color: var(--blue);
  &:hover {
    text-decoration: underline;
  }
`;

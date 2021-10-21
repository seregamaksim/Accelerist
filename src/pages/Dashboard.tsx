import styled, { ThemeProvider } from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { actions, selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import SubHeader from '../components/SubHeader';
import { useEffect } from 'react';
import { fetchSavedList } from '../store/savedList/thunks';
import SavedList from '../components/SavedList';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import FavoritesList from '../components/FavoritesList';
import Reports from '../components/Reports';
import EmptySavedList from '../components/EmptySavedList';
import { fetchFavoritesList } from '../store/favoriteCompanies/thunks';
import EmptyFavoritesList from '../components/EmptyFavoritesList';
import { QueryParams } from '../store/savedList/types';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const savedListItems = useAppSelector(selectors.savedList.selectSavedList);
  const favoriteListItems = useAppSelector(
    selectors.favoriteCompanies.selectFavoritesList
  );
  const querySavedList: QueryParams = {
    page: 1,
    limit: 2,
    sort: 'alphabet',
  };
  const queryFavoritesList = {
    page: 1,
    limit: 6,
  };

  useEffect(() => {
    dispatch(fetchSavedList(querySavedList));
    dispatch(fetchFavoritesList(queryFavoritesList));
  }, [dispatch]);
  return (
    <MainLayout>
      <StyledSubHeader title="Dashboard" />
      <Container>
        <Wrapper>
          <DashboardBlock $twoColumns={true}>
            <DashboardBlockHead>
              <DashboardBlockHeadTitle>
                Prospecting Sessions
              </DashboardBlockHeadTitle>
              <DashboardBlockHeadLink to="/prospects">
                see more
              </DashboardBlockHeadLink>
            </DashboardBlockHead>
            {savedListItems.length > 0 ? (
              <SavedList data={savedListItems} />
            ) : (
              <EmptySavedList />
            )}
          </DashboardBlock>
          <DashboardBlock>
            <DashboardBlockHead>
              <DashboardBlockHeadTitle>Favorites</DashboardBlockHeadTitle>
              <DashboardBlockHeadLink to="/favorites">
                see more
              </DashboardBlockHeadLink>
            </DashboardBlockHead>
            {favoriteListItems.length > 0 ? (
              <FavoritesList data={favoriteListItems} miniCards />
            ) : (
              <StyledEmptyFavoritesList />
            )}
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
const DashboardBlock = styled.div<{ $twoColumns?: boolean }>`
  display: flex;
  flex-direction: column;
  grid-column: ${(props) => (props.$twoColumns ? 'span 2' : '')};
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
const StyledEmptyFavoritesList = styled(EmptyFavoritesList)`
  flex: 1;
`;

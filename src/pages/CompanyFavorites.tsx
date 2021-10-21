import { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import EmptyFavoritesList from '../components/EmptyFavoritesList';
import FavoritesList from '../components/FavoritesList';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';
import { selectors } from '../store/ducks';
import { fetchFavoritesList } from '../store/favoriteCompanies/thunks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useQuery } from '../hooks/useQuery';
import PageNavigation from '../components/PageNavigation';

export default function CompanyFavorites() {
  const dispatch = useAppDispatch();
  const favoriteListItems = useAppSelector(
    selectors.favoriteCompanies.selectFavoritesList
  );
  const metaItems = useAppSelector(selectors.favoriteCompanies.selectMeta);

  const queryPage = useQuery();

  useEffect(() => {
    dispatch(
      fetchFavoritesList({
        page: queryPage.get('page') ? Number(queryPage.get('page')) : 1,
        limit: 12,
      })
    );
  }, [favoriteListItems.length]);
  return (
    <MainLayout>
      <StyledSubHeader title="Favorites" />
      <StyledContainer>
        <Wrapper>
          <InfoNavigation>
            <TotalCount>{metaItems.totalItems} companies</TotalCount>
            <PageNavigation
              metaData={metaItems}
              call={fetchFavoritesList}
              showOnlyQueryPage={true}
            />
          </InfoNavigation>
          {favoriteListItems.length > 0 ? (
            <FavoritesList data={favoriteListItems} />
          ) : (
            <StyledEmptyFavoritesList />
          )}
        </Wrapper>
      </StyledContainer>
    </MainLayout>
  );
}

const StyledSubHeader = styled(SubHeader)`
  margin-bottom: 32px;
`;
const StyledContainer = styled(Container)`
  padding-bottom: 32px;
`;
const Wrapper = styled.div`
  max-width: 1096px;
`;
const InfoNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const TotalCount = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
`;
const StyledEmptyFavoritesList = styled(EmptyFavoritesList)`
  flex: 1;
`;

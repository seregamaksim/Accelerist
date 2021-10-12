import { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import FavoritesList from '../components/FavoritesList';
import PageNavigation from '../components/PageNavigation';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';
import { selectors } from '../store/ducks';
import { fetchFavoritesList } from '../store/favoriteCompanies/thunks';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function CompanyFavorites() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectors.favoriteCompanies.selectFavoritesList);
  const totalItems = useAppSelector(
    selectors.favoriteCompanies.selectTotalCount
  );

  useEffect(() => {
    // dispatch
  }, []);
  return (
    <MainLayout>
      <StyledSubHeader title="Favorites" />
      <Container>
        <InfoNavigation>
          <TotalCount>{totalItems} companies</TotalCount>
          <PageNavigation call={fetchFavoritesList} />
        </InfoNavigation>
        <FavoritesList miniCards />
      </Container>
    </MainLayout>
  );
}

const StyledSubHeader = styled(SubHeader)`
  margin-bottom: 32px;
`;
const InfoNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TotalCount = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
`;

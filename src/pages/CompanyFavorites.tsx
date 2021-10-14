import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import EmptyFavoritesList from '../components/EmptyFavoritesList';
import FavoritesList from '../components/FavoritesList';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';
import { selectors } from '../store/ducks';
import { fetchFavoritesList } from '../store/favoriteCompanies/thunks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import backArrow from '../static/images/back-arrow.svg';
import { useBorberNavigation } from '../hooks/useBorberNavigation';
import { useQuery } from '../hooks/useQuery';
import { useHistory, useLocation } from 'react-router';

export default function CompanyFavorites() {
  const dispatch = useAppDispatch();
  const favoriteListItems = useAppSelector(
    selectors.favoriteCompanies.selectFavoritesList
  );
  const metaItems = useAppSelector(selectors.favoriteCompanies.selectMeta);
  const navigationBorders = useBorberNavigation(metaItems);
  const queryPage = useQuery();
  const history = useHistory();
  const location = useLocation();

  function fetchNavigate(direction: string) {
    const currentPage =
      direction === 'prev'
        ? Number(metaItems.currentPage) - 1
        : Number(metaItems.currentPage) + 1;
    dispatch(
      fetchFavoritesList({
        page: currentPage,
        limit: 12,
      })
    );
    history.push({
      search: `?page=${currentPage}`,
    });
  }
  useEffect(() => {
    dispatch(
      fetchFavoritesList({
        page: queryPage.get('page') ? Number(queryPage.get('page')) : 1,
        limit: 12,
      })
    );
  }, [dispatch]);
  return (
    <MainLayout>
      <StyledSubHeader title="Favorites" />
      <Container>
        <InfoNavigation>
          <TotalCount>{metaItems.totalItems} companies</TotalCount>
          {metaItems.totalItems > 0 && (
            <PageNavigation>
              {Number(metaItems.currentPage) !== 1 ? (
                <PageNavigationBtn onClick={() => fetchNavigate('prev')} />
              ) : null}
              <PageNavigationCounter>{navigationBorders}</PageNavigationCounter>
              {Number(metaItems.currentPage) !== metaItems.totalPages ? (
                <PageNavigationBtn
                  $rotate={true}
                  onClick={() => fetchNavigate('next')}
                />
              ) : null}
            </PageNavigation>
          )}
        </InfoNavigation>
        {favoriteListItems.length > 0 ? (
          <FavoritesList data={favoriteListItems} miniCards />
        ) : (
          <StyledEmptyFavoritesList />
        )}
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
const PageNavigation = styled.div`
  display: flex;
  align-items: center;
`;
const PageNavigationBtn = styled.button<{ $rotate?: boolean }>`
  width: 24px;
  height: 24px;
  background: url(${backArrow}) no-repeat center;
  background-size: 12px 20px;
  ${(props) => (props.$rotate ? 'transform: rotate(180deg)' : '')};
  cursor: pointer;
`;

const PageNavigationCounter = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
`;

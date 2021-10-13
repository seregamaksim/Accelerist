import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import EmptyFavoritesList from '../components/EmptyFavoritesList';
import FavoritesList from '../components/FavoritesList';
// import PageNavigation from '../components/PageNavigation';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';
import { selectors } from '../store/ducks';
import { fetchFavoritesList } from '../store/favoriteCompanies/thunks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import backArrow from '../static/images/back-arrow.svg';

export default function CompanyFavorites() {
  const dispatch = useAppDispatch();
  const favoriteListItems = useAppSelector(
    selectors.favoriteCompanies.selectFavoritesList
  );
  const metaItems = useAppSelector(selectors.favoriteCompanies.selectMeta);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [queryFavoriteList, setQueryFavoriteList] = useState({
    page: 1,
    limit: 12,
  });
  function nextPage() {
    // setQueryFavoriteList({
    //   page: 10,
    //   limit: 12,
    // });++
    setCurrentPage((prevVal) => prevVal + 1);
    console.log('currentPage', currentPage);
    dispatch(fetchFavoritesList({ page: currentPage, limit: 12 }));
  }
  function prevPage() {
    setCurrentPage((prevVal) => prevVal - 1);
    console.log('currentPage', currentPage);

    dispatch(fetchFavoritesList({ page: currentPage, limit: 12 }));
  }

  useEffect(() => {
    console.log('currentPage', currentPage);
    dispatch(fetchFavoritesList(queryFavoriteList));
  }, [dispatch]);
  return (
    <MainLayout>
      <StyledSubHeader title="Favorites" />
      <Container>
        <InfoNavigation>
          <TotalCount>{metaItems.totalItems} companies</TotalCount>
          {metaItems.totalItems > 0 && (
            <PageNavigation>
              {Number(metaItems.currentPage) <= metaItems.totalPages ? (
                <PageNavigationBtn onClick={prevPage} />
              ) : null}
              <PageNavigationCounter>{currentPage}</PageNavigationCounter>
              {Number(metaItems.currentPage) !== metaItems.totalPages ? (
                <PageNavigationBtn $rotate={true} onClick={nextPage} />
              ) : null}
            </PageNavigation>
          )}

          {/* <PageNavigation call={fetchFavoritesList} /> */}
        </InfoNavigation>
        {favoriteListItems.length > 0 ? (
          <FavoritesList data={favoriteListItems} miniCards />
        ) : (
          <StyledEmptyFavoritesList />
        )}
        {/* <StyledFavoritesList miniCards /> */}
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

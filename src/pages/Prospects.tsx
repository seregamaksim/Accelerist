import styled from 'styled-components';
import Container from '../components/Container';
import SubHeader from '../components/SubHeader';
import { useBorberNavigation } from '../hooks/useBorberNavigation';
import MainLayout from '../layouts/MainLayout';
import { selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import backArrow from '../static/images/back-arrow.svg';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { fetchSavedList } from '../store/savedList/thunks';
import { useQuery } from '../hooks/useQuery';
import { QueryParams } from '../store/savedList/types';
import SavedList from '../components/SavedList';
import { Link, NavLink } from 'react-router-dom';

export default function Prospects() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const queryPage = useQuery();
  const metaData = useAppSelector(selectors.savedList.selectMetaData);
  const items = useAppSelector(selectors.savedList.selectSavedList);
  const navigationBorders = useBorberNavigation(metaData);

  function fetchNavigate(direction: string) {
    const currentPage =
      direction === 'prev'
        ? Number(metaData.currentPage) - 1
        : Number(metaData.currentPage) + 1;
    dispatch(
      fetchSavedList({
        page: currentPage,
        limit: 12,
        sort: queryPage.get('sort') ? queryPage.get('sort') : 'alphabet',
      })
    );
    history.push({
      search: `?page=${currentPage}&sort=${
        queryPage.get('sort') ? queryPage.get('sort') : 'alphabet'
      }`,
    });
  }

  useEffect(() => {
    console.log('aw');

    const queryParams: QueryParams = {
      page: queryPage.get('page') ? Number(queryPage.get('page')) : 1,
      limit: 12,
      sort: queryPage.get('sort') ? queryPage.get('sort') : 'alphabet',
    };
    dispatch(fetchSavedList(queryParams));
  }, [items.length, queryPage.get('sort')]);
  return (
    <MainLayout>
      <StyledSubHeader title="Prospects" />
      <Container>
        <Wrapper>
          <InfoNavigation>
            <SortingBlock>
              <SortingBlockTitle>Sort by</SortingBlockTitle>
              <SortingBlockList>
                <SortingBlockItem>
                  <SortingBlockItemBtn
                    to={{
                      pathname: '/prospects',
                      search: '?sort=alphabet',
                    }}
                    isActive={(match, location) => {
                      if (!location) {
                        return false;
                      }

                      // only consider an event active if its event id is an odd number
                      console.log('location', location);
                      return location.search.includes('alphabet')
                        ? true
                        : false;
                    }}
                  >
                    Alphabet
                  </SortingBlockItemBtn>
                </SortingBlockItem>
                <SortingBlockItem>
                  <SortingBlockItemBtn
                    to={{
                      pathname: '/prospects',
                      search: '?sort=available',
                    }}
                    isActive={(match, location) => {
                      if (!location) {
                        return false;
                      }

                      // only consider an event active if its event id is an odd number
                      console.log('location', location);
                      return location.search.includes('available')
                        ? true
                        : false;
                    }}
                  >
                    Prospects Available
                  </SortingBlockItemBtn>
                </SortingBlockItem>
                <SortingBlockItem>
                  <SortingBlockItemBtn
                    to={{
                      pathname: '/prospects',
                      search: '?sort=last-activity',
                    }}
                    isActive={(match, location) => {
                      if (!location && !queryPage.get('sort')) {
                        return false;
                      }
                      return location.search.includes('last-activity')
                        ? true
                        : false;
                    }}
                  >
                    Last Activity
                  </SortingBlockItemBtn>
                </SortingBlockItem>
              </SortingBlockList>
            </SortingBlock>
            {metaData.totalItems > 0 && (
              <PageNavigation>
                {Number(metaData.currentPage) !== 1 ? (
                  <PageNavigationBtn onClick={() => fetchNavigate('prev')} />
                ) : null}
                <PageNavigationCounter>
                  {navigationBorders}
                </PageNavigationCounter>
                {Number(metaData.currentPage) !== metaData.totalPages ? (
                  <PageNavigationBtn
                    $rotate={true}
                    onClick={() => fetchNavigate('next')}
                  />
                ) : null}
              </PageNavigation>
            )}
          </InfoNavigation>
          <SavedList data={items} />
        </Wrapper>
      </Container>
    </MainLayout>
  );
}
const StyledSubHeader = styled(SubHeader)`
  margin-bottom: 32px;
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

const SortingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SortingBlockTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  margin-right: 26px;
`;
const SortingBlockList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SortingBlockItem = styled.li`
  margin-right: 22px;
  &:last-child {
    margin-right: 0;
  }
`;
const SortingBlockItemBtn = styled(NavLink)`
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--blue);
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  &:hover::before {
    opacity: 1;
  }
  &.active::before {
    opacity: 1;
  }
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

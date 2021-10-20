import qs from 'qs';
import { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import styled from 'styled-components';
import Container from '../components/Container';
import SubHeaderEditable from '../components/SubHeaderEditable';
import isEmpty from '../helpers/isEmpty';
import { useBorberNavigation } from '../hooks/useBorberNavigation';
import MainLayout from '../layouts/MainLayout';
import LoadingIcon from '../static/images/LoadingIcon';
import { fetchCompanies } from '../store/companies/thunks';
import { selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchSavedItem } from '../store/savedItem/thunks';
import backArrow from '../static/images/back-arrow.svg';
import SavedList from '../components/SavedList';
import CompanyCard from '../components/CompanyCard';

export default function ProspectsDetail() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();
  const [isInput, setIsInput] = useState(false);
  const item = useAppSelector(selectors.savedItem.selectSavedItem);
  const companies = useAppSelector(selectors.companies.selectCompanies);
  const companiesMeta = useAppSelector(selectors.companies.selectCompaniesMeta);

  const navigationBorders = useBorberNavigation(companiesMeta);

  function fetchNavigate(direction: string) {
    const currentPage =
      direction === 'prev'
        ? Number(companiesMeta.currentPage) - 1
        : Number(companiesMeta.currentPage) + 1;
    // dispatch(
    //   fetchFavoritesList({
    //     page: currentPage,
    //     limit: 12,
    //   })
    // );
    history.push({
      search: `?page=${currentPage}`,
    });
  }

  useEffect(() => {
    // console.log('id', id);

    // console.log('companiesMeta', companiesMeta);

    dispatch(fetchSavedItem(id)).then((res) => {
      const payload: any = res.payload;
      const queryParamsForCompanies = {
        page: 1,
        limit: 12,
        ...payload.filters,
      };
      dispatch(fetchCompanies(queryParamsForCompanies));
    });
  }, [id, dispatch]);
  return (
    <MainLayout>
      <StyledSubHeader
        isInput={isInput}
        setIsInput={setIsInput}
        data={item}
        title={item.name}
      />
      <Container>
        {isEmpty(item) && fetchSavedItem.pending ? (
          <LoadingIcon />
        ) : (
          <Wrapper>
            <HeadInfo>
              <CompanyCounter>
                {item.prospectsAvailable} companies
              </CompanyCounter>
              <ListFiltersWrap>
                <ListFiltersWrapTitle>Filters</ListFiltersWrapTitle>
                <ListFilters>
                  {Object.values(item.filters).map((item, index) => (
                    <ListFiltersItem key={index}>{item}</ListFiltersItem>
                  ))}
                </ListFilters>
              </ListFiltersWrap>
              <PaginationControls>
                <ControlsList></ControlsList>
                {companiesMeta.totalItems > 0 && (
                  <PageNavigation>
                    {Number(companiesMeta.currentPage) !== 1 ? (
                      <PageNavigationBtn
                        onClick={() => fetchNavigate('prev')}
                      />
                    ) : null}
                    <PageNavigationCounter>
                      {navigationBorders}
                    </PageNavigationCounter>
                    {Number(companiesMeta.currentPage) !==
                    companiesMeta.totalPages ? (
                      <PageNavigationBtn
                        $rotate={true}
                        onClick={() => fetchNavigate('next')}
                      />
                    ) : null}
                  </PageNavigation>
                )}
              </PaginationControls>
            </HeadInfo>
            <CompaniesList>
              {companies.map((item) => (
                <CompanyCard data={item} key={item.id} />
              ))}
            </CompaniesList>
          </Wrapper>
        )}
      </Container>
    </MainLayout>
  );
}
const StyledSubHeader = styled(SubHeaderEditable)`
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  max-width: 1096px;
`;

const HeadInfo = styled.div`
  margin-bottom: 24px;
`;
const CompanyCounter = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
  margin-bottom: 24px;
`;
const ListFiltersWrap = styled.div`
  margin-bottom: 24px;
`;
const ListFiltersWrapTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  margin-bottom: 8px;
`;
const ListFilters = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 19px;
`;
const ListFiltersItem = styled.li`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  padding: 6px 10px;
  background-color: var(--white);
  border: 1px solid var(--secondaryBlue);
  border-radius: 6px;
  text-transform: capitalize;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;
const ControlsList = styled.ul``;
const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const CompaniesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

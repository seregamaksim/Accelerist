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
import PageNavigation from '../components/PageNavigation';
import { useQuery } from '../hooks/useQuery';

export default function ProspectsDetail() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const queryPage = useQuery();
  const [isInput, setIsInput] = useState(false);
  const item = useAppSelector(selectors.savedItem.selectSavedItem);
  const companies = useAppSelector(selectors.companies.selectCompanies);
  const companiesMeta = useAppSelector(selectors.companies.selectCompaniesMeta);

  useEffect(() => {
    dispatch(fetchSavedItem(id)).then((res) => {
      const payload: any = res.payload;
      const queryParamsForCompanies = {
        page: queryPage.get('page') ? Number(queryPage.get('page')) : 1,
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
      <StyledContainer>
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
                <PageNavigation
                  metaData={companiesMeta}
                  call={fetchCompanies}
                  queryParams={item.filters}
                  showOnlyQueryPage={true}
                />
              </PaginationControls>
            </HeadInfo>
            <CompaniesList>
              {companies.map((item) => (
                <CompanyCard data={item} key={item.id} />
              ))}
            </CompaniesList>
          </Wrapper>
        )}
      </StyledContainer>
    </MainLayout>
  );
}
const StyledSubHeader = styled(SubHeaderEditable)`
  margin-bottom: 32px;
`;
const StyledContainer = styled(Container)`
  padding-bottom: 32px;
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

const CompaniesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

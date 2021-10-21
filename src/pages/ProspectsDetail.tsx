import { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Container from '../components/Container';
import SubHeaderEditable from '../components/SubHeaderEditable';
import isEmpty from '../helpers/isEmpty';
import MainLayout from '../layouts/MainLayout';
import LoadingIcon from '../static/images/LoadingIcon';
import { fetchCompanies } from '../store/companies/thunks';
import { selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchSavedItem } from '../store/savedItem/thunks';
import CompanyCard from '../components/CompanyCard';
import PageNavigation from '../components/PageNavigation';
import { useQuery } from '../hooks/useQuery';
import ExportBtn from '../components/ExportBtn';
import checkIcon from '../static/images/check.svg';
import ButtonWithIcon from '../ui/ButtonWithIcon';
import TrashIcon from '../static/images/TrashIcon';
import { updateSavedList } from '../store/savedList/thunks';

export default function ProspectsDetail() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const queryPage = useQuery();
  const [isEditable, setIsEditable] = useState(false);
  const item = useAppSelector(selectors.savedItem.selectSavedItem);
  const companies = useAppSelector(selectors.companies.selectCompanies);
  const companiesMeta = useAppSelector(selectors.companies.selectCompaniesMeta);
  const itemDeleteIds = item.filters.deleteIds ? item.filters.deleteIds! : [];
  const [deleteIds, setDeleteIds] = useState<any>([]);
  console.log('item', item.filters.deleteIds);

  function saveCardList() {
    const body = {
      values: {
        filters: {
          ...item.filters,
          deleteIds: deleteIds,
        },
        name: item.name,
      },
      id: id,
      // page: queryPage.get('page') ? Number(queryPage.get('page')) : 1,
      // limit: 12,
    };
    dispatch(updateSavedList(body));
    console.log('params', body);
  }
  function checboxChange(e: SyntheticEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    const checked = target.checked;
    const inputId = target.id;

    if (checked) {
      setDeleteIds([...deleteIds, inputId]);
    } else {
      const newArray = deleteIds.filter((item: string) => item !== inputId);
      setDeleteIds(newArray);
    }
  }
  console.log('deleteIds', deleteIds);
  useEffect(() => {
    dispatch(fetchSavedItem(id)).then((res) => {
      const payload: any = res.payload;
      const queryParamsForCompanies = {
        page: queryPage.get('page') ? Number(queryPage.get('page')) : 1,
        limit: 12,
        ...payload.filters,
      };
      const payloadDeleteIds = payload.filters.deleteIds;
      if (payloadDeleteIds) {
        setDeleteIds([...payloadDeleteIds, deleteIds]);
      }
      dispatch(fetchCompanies(queryParamsForCompanies));
    });
  }, [id, dispatch]);
  return (
    <MainLayout>
      <StyledSubHeader
        isInput={isEditable}
        setIsInput={setIsEditable}
        data={item}
        title={item.name}
        saveFunc={saveCardList}
      />
      <StyledContainer>
        {isEmpty(item) && fetchSavedItem.pending ? (
          <LoadingIcon />
        ) : (
          <Wrapper>
            <HeadInfo>
              <CompanyCounter>
                {companiesMeta.totalItems} companies
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
                <ControlsList>
                  <ExportBtn id={item.id} name={item.name} />
                  {deleteIds.length > 0 && isEditable && (
                    <DeleteCardsBtn
                      icon={<TrashIcon />}
                      text="Delete"
                      handleClick={saveCardList}
                    />
                  )}
                </ControlsList>
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
                <CompanieItemWrap key={item.id}>
                  {isEditable && (
                    <>
                      <CheckboxInput
                        value={item.id}
                        id={item.id}
                        onChange={checboxChange}
                        checked={deleteIds.includes(item.id)}
                      />
                      <CheckboxLabel htmlFor={item.id} />
                    </>
                  )}

                  <CompanyCard data={item} />
                </CompanieItemWrap>
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
const ControlsList = styled.div`
  display: flex;
  align-items: center;
`;
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

const CompanieItemWrap = styled.div`
  position: relative;
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid var(--gray);
  border-radius: 2px;
  background-color: var(--white);
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 5px;
    transform: translateX(-50%);
    width: 12px;
    height: 9px;
    background: url(${checkIcon}) no-repeat center;
    background-size: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox',
  className: 'visually-hidden',
}))`
  &:checked + ${CheckboxLabel} {
    background-color: var(--secondaryBlue);
    border-color: var(--secondaryBlue);
    &::before {
      opacity: 1;
    }
  }
`;

const DeleteCardsBtn = styled(ButtonWithIcon)`
  margin-left: 32px;
`;

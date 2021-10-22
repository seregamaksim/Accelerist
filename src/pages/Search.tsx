import qs from 'qs';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import CompanyCard from '../components/CompanyCard';
import Container from '../components/Container';
import ExportBtn from '../components/ExportBtn';
import PageNavigation from '../components/PageNavigation';
import SavedItem from '../components/SavedItem';
import SearchForm from '../components/SearchForm';
import SubHeader from '../components/SubHeader';
import { useQuery } from '../hooks/useQuery';
import MainLayout from '../layouts/MainLayout';
import EmailIcon from '../static/images/EmailIcon';
import FolderPlusIcon from '../static/images/FolderPlusIcon';
import { fetchCompanies } from '../store/companies/thunks';
import { selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import ButtonWithIcon from '../ui/ButtonWithIcon';

export default function Search() {
  const dispatch = useAppDispatch();
  const queryPage = useQuery();
  const location = useLocation();
  const companies = useAppSelector(selectors.companies.selectCompanies);
  const companiesMeta = useAppSelector(selectors.companies.selectCompaniesMeta);

  useEffect(() => {
    // var prefixed = qs.parse(location.search, { ignoreQueryPrefix: true });
    // console.log('location', prefixed);
    // const params = qs.stringify()
    // dispatch(fetchCompanies(prefixed));
  }, []);
  return (
    <MainLayout>
      <StyledSubHeader title="Search" search={true} />
      <StyledContainer>
        <SearchForm />
        <Wrapper>
          <Info>
            <InfoCountCompanies>
              Found {companiesMeta.totalItems} companies
            </InfoCountCompanies>
            <ControlsNavigationWrap>
              <ControlsList>
                <ControlsItem>
                  <ButtonWithIcon
                    icon={<FolderPlusIcon />}
                    text="Save List"
                    handleClick={() => console.log('save list')}
                  />
                </ControlsItem>
                <ControlsItem>{/* <ExportBtn id={} /> */}</ControlsItem>
                <ControlsItem>
                  <ButtonWithIcon
                    icon={<EmailIcon />}
                    text="Accelerist Support"
                    handleClick={() => console.log('support')}
                  />
                </ControlsItem>
              </ControlsList>
              <PageNavigation metaData={companiesMeta} call={fetchCompanies} />
            </ControlsNavigationWrap>
          </Info>
          <CompaniesList>
            {companies.length > 0 &&
              companies.map((item) => (
                <CompanyCard key={item.id} data={item} />
              ))}
          </CompaniesList>
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

const Info = styled.div`
  margin-bottom: 24px;
`;
const InfoCountCompanies = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
  margin-bottom: 24px;
`;
const ControlsNavigationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ControlsList = styled.ul`
  display: flex;
  align-items: center;
`;
const ControlsItem = styled.li`
  margin-right: 35px;
  &:last-child {
    margin-right: 0;
  }
`;

const CompaniesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Container from '../components/Container';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';
import { http } from '../services/http';
import { Company } from '../store/companies/types';
import companyIcon from '../static/images/company.svg';
import LikeBtn from '../ui/LikeBtn';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchCompany } from '../store/companyProfile/thunks';
import { selectors } from '../store/ducks';
import currency from 'currency.js';

export default function CompanyProfile() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const companyData = useAppSelector(selectors.companyProfile.selectCompany);
  const [liked, setLiked] = useState(companyData?.like ? true : false);

  const revenue = currency(companyData.revenue, {
    pattern: `! #`,
    precision: 0,
  }).format();
  const employeeCount = currency(companyData.employeeCount, {
    pattern: `#`,
    precision: 0,
  }).format();

  useEffect(() => {
    dispatch(fetchCompany(id));
  }, [dispatch]);

  console.log('params', id);

  return (
    <MainLayout>
      <StyledSubHeader title="Corparate Profile" backBtn />
      <Container>
        <Wrapper>
          <Head>
            <HeadImgWrap>
              <HeadImg src={companyIcon} />
            </HeadImgWrap>
            <HeadCompanyInfo>
              <HeadCompanyNameWrap>
                <HeadCompanyName>{companyData?.name}</HeadCompanyName>
                {companyData && (
                  <HeadCompanyLikeBtn id={companyData.id} liked={liked} />
                )}
              </HeadCompanyNameWrap>
              <CsrInfo>No information</CsrInfo>
            </HeadCompanyInfo>
          </Head>
          <ContentWrap>
            <Content>
              <ContentTitle>Business Description Products</ContentTitle>
              <ContentSection>
                <ContentSectionTitle>Description</ContentSectionTitle>
                <ContentSectionText>
                  {companyData?.descriptionList}
                </ContentSectionText>
              </ContentSection>
              <ContentSection>
                <ContentSectionTitle>Reported</ContentSectionTitle>
                <ReportedList>
                  <ReportedItem>
                    <ReportedItemTitle>Revenue Reported</ReportedItemTitle>
                    <ReportedItemValue>{revenue}</ReportedItemValue>
                  </ReportedItem>
                  <ReportedItem>
                    <ReportedItemTitle>Employees Reported</ReportedItemTitle>
                    <ReportedItemValue>{employeeCount}</ReportedItemValue>
                  </ReportedItem>
                </ReportedList>
              </ContentSection>
              <ContentSection>
                <ContentSectionTitle>Company Ticker</ContentSectionTitle>
              </ContentSection>
            </Content>
          </ContentWrap>
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
const Head = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  padding: 40px;
  border-radius: 6px 6px 0px 0px;
`;
const HeadImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: var(--white);
  border-radius: 8px;
  margin-right: 24px;
`;
const HeadImg = styled.img.attrs(() => ({
  width: 48,
  height: 48,
}))``;

const HeadCompanyInfo = styled.div``;
const HeadCompanyNameWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
const HeadCompanyName = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--black);
  margin-right: 8px;
`;
const HeadCompanyLikeBtn = styled(LikeBtn)`
  border: 0;
`;
const CsrInfo = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
`;
const ContentWrap = styled.div`
  display: flex;
  background-color: var(--white);
`;
const Content = styled.div`
  width: 66.51%;
  border-right: 1px solid #ebebeb;
  padding: 32px 40px;
`;

const ContentTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--black);
  margin-bottom: 24px;
`;

const ContentSection = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ContentSectionTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ContentSectionText = styled.p`
  font-size: 16px;
  line-height: 25px;

  color: var(--black);
`;
const ReportedList = styled.ul`
  display: flex;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;
const ReportedItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 16px;
  border-right: 1px solid #ebebeb;
  &:last-child {
    border: 0;
  }
`;
const ReportedItemTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  margin-bottom: 4px;
`;
const ReportedItemValue = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
`;

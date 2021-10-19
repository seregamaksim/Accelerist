import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Container from '../components/Container';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';
import companyIcon from '../static/images/company.svg';
import LikeBtn from '../ui/LikeBtn';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchCompany } from '../store/companyProfile/thunks';
import { selectors } from '../store/ducks';
import PhoneIcon from '../static/images/PhoneIcon';
import { Link } from 'react-router-dom';
import GlobeIcon from '../static/images/GlobeIcon';
import { ReadMore } from '../components/ReadMore';
import { formatedNumbers } from '../helpers/formatedNumbers';
import LoadingIcon from '../static/images/LoadingIcon';

export default function CompanyProfile() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const companyData = useAppSelector(selectors.companyProfile.selectCompany);
  const fetchStatus = useAppSelector(
    selectors.companyProfile.selectFetchStatus
  );
  const [liked, setLiked] = useState(companyData?.like ? true : false);

  useEffect(() => {
    dispatch(fetchCompany(id));
  }, [dispatch, id]);

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
                <ReadMore>{companyData?.descriptionList}</ReadMore>
              </ContentSection>

              <ContentSection>
                <ContentSectionTitle>Reported</ContentSectionTitle>
                <ReportedList>
                  <ReportedItem>
                    <ReportedItemTitle>Revenue Reported</ReportedItemTitle>
                    <ReportedItemValue>
                      {formatedNumbers(companyData.revenue)}
                    </ReportedItemValue>
                  </ReportedItem>
                  <ReportedItem>
                    <ReportedItemTitle>Employees Reported</ReportedItemTitle>
                    <ReportedItemValue>
                      {formatedNumbers(companyData.employeeCount, '#')}
                    </ReportedItemValue>
                  </ReportedItem>
                </ReportedList>
              </ContentSection>

              <ContentSection>
                <ContentSectionTitle>Company Ticker</ContentSectionTitle>
                <TickerItem>
                  <TickerItemTitle>No information</TickerItemTitle>
                </TickerItem>
              </ContentSection>

              <ContentSection>
                <ContentSectionTitle>Company Contacts</ContentSectionTitle>
                <ContactsBlock>
                  <ContactsBlockWrapper>
                    <ContactsBlockLink
                      target="_blank"
                      to={{ pathname: `https://${companyData.website}` }}
                    >
                      <GlobeIcon /> {companyData.website}
                    </ContactsBlockLink>
                    <ContactsBlockLink
                      target="_blank"
                      to={{ pathname: `tel: ${companyData.phone}` }}
                    >
                      <PhoneIcon /> {companyData.phone}
                    </ContactsBlockLink>
                  </ContactsBlockWrapper>
                  <ContactsBlockWrapper>
                    <ContactsBlockText as="p">
                      <GlobeIcon /> {companyData.street}
                    </ContactsBlockText>
                  </ContactsBlockWrapper>
                </ContactsBlock>
              </ContentSection>

              <ContentTitle>Social Impact</ContentTitle>
              <ContentSectionFlex>
                <ContentSection>
                  <ContentSectionTitle>Type of Investment</ContentSectionTitle>
                  <SocialImpactList>
                    {companyData.typesOfInvestment ? (
                      companyData.typesOfInvestment.map((item, index) => (
                        <SocialImpactItem key={index}>{item}</SocialImpactItem>
                      ))
                    ) : (
                      <SocialImpactItem>No information</SocialImpactItem>
                    )}
                  </SocialImpactList>
                </ContentSection>
                <ContentSection>
                  <ContentSectionTitle>CRS Focus</ContentSectionTitle>
                  <SocialImpactList>
                    {companyData.crsFocus.length > 0 ? (
                      companyData.crsFocus.map((item, index) => (
                        <SocialImpactItem key={index}>{item}</SocialImpactItem>
                      ))
                    ) : (
                      <SocialImpactItem>No information</SocialImpactItem>
                    )}
                  </SocialImpactList>
                </ContentSection>
              </ContentSectionFlex>

              <ContentSection>
                <ContentSectionTitle>SDG Goal Alignment</ContentSectionTitle>

                <SdgGoalsList>
                  {companyData.sdgGoals.length > 0 ? (
                    companyData.sdgGoals.map((item, index) => (
                      <SdgGoalsItem key={index}>{item}</SdgGoalsItem>
                    ))
                  ) : (
                    <SdgGoalsItem>No selected goal</SdgGoalsItem>
                  )}
                </SdgGoalsList>
              </ContentSection>
              <ContentSection>
                <ContentSectionTitle>Contributions</ContentSectionTitle>
                <ReportedList>
                  <ReportedItem>
                    <ReportedItemTitle>Cash Contributions</ReportedItemTitle>
                    <ReportedItemValue>
                      {formatedNumbers(companyData.cashContributions)}
                    </ReportedItemValue>
                  </ReportedItem>
                  <ReportedItem>
                    <ReportedItemTitle>
                      Employee Contributions
                    </ReportedItemTitle>
                    <ReportedItemValue>
                      {formatedNumbers(companyData.employeeContributions)}
                    </ReportedItemValue>
                  </ReportedItem>
                  <ReportedItem>
                    <ReportedItemTitle>
                      Total Social Contributions
                    </ReportedItemTitle>
                    <ReportedItemValue>
                      {formatedNumbers(companyData.cashContributions)}
                    </ReportedItemValue>
                  </ReportedItem>
                  <ReportedItem>
                    <ReportedItemTitle>In-Kind Contributions</ReportedItemTitle>
                    <ReportedItemValue>
                      {formatedNumbers(companyData.inKindContributions)}
                    </ReportedItemValue>
                  </ReportedItem>
                </ReportedList>
              </ContentSection>
              <ContentSection>
                <ContentSectionTitle>
                  Charitable Focus & Programs
                </ContentSectionTitle>
                <ContentSectionText>No information</ContentSectionText>
              </ContentSection>
              <ContentSection>
                <ContentSectionTitle>GRI Compliant</ContentSectionTitle>
                <ContentSectionText>Yes</ContentSectionText>
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
const StyledLoadingIcon = styled(LoadingIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  max-width: 1096px;
  padding-bottom: 32px;
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
  border-radius: 0 0 6px 6px;
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
  line-height: 24px;
  color: var(--black);
`;
const ReportedList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  &:last-child,
  &:nth-child(2n) {
    border-right: 0;
  }
  &:not(:nth-child(1)):not(:nth-child(2)) {
    border-top: 1px solid #ebebeb;
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

const TickerItem = styled.div`
  display: inline-block;
  padding: 24px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;
const TickerItemTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--black);
`;

const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 20px;
`;
const ContactsBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactsBlockLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  margin-right: 25px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
  svg {
    margin-right: 10px;
  }
`;
const ContactsBlockText = styled(ContactsBlockLink)`
  &:hover {
    text-decoration: initial;
  }
`;

const ContentSectionFlex = styled(ContentSection)`
  display: flex;
  & ${ContentSection} {
    width: 50%;
    margin-bottom: 0;
    &:first-child {
      margin-right: 24px;
    }
  }
`;
const SocialImpactList = styled.ul`
  padding: 24px;
  border: 1px solid #e8e8e8;

  border-radius: 6px;
`;
const SocialImpactItem = styled.li`
  padding-left: 14px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--blue);
  }
`;
const SdgGoalsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;
const SdgGoalsItem = styled.li`
  width: 112px;
  height: 112px;
  padding: 20px 15px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: var(--black);
  text-align: center;
  border-radius: 6px;
  background-color: var(--lightGray);
`;

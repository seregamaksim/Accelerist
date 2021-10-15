import styled, { ThemeProvider } from 'styled-components';
import { Company } from '../store/companies/types';
import companyIcon from '../static/images/company.svg';
import currency from 'currency.js';
import { theme } from '../theme';
import UiLink from '../ui/UiLink';
import LikeBtn from '../ui/LikeBtn';
import { Link } from 'react-router-dom';

interface ICompanyCardProps {
  data: Company;
  className?: string;
}

export default function CompanyCard({ className, data }: ICompanyCardProps) {
  const revenue = currency(data.revenue, {
    pattern: `! #`,
    precision: 0,
  }).format();

  return (
    <Root className={className}>
      <Wrapper>
        <LogoBlock>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <RankingWrap>
            <RankingTitle>Priority Ranking</RankingTitle>
            <RankingValue>4</RankingValue>
          </RankingWrap>
        </LogoBlock>
        <NameAddressBlock>
          <NameCompany to={`/profile/${data.id}`}>{data.name}</NameCompany>
          <AddressCompany>{data.street}</AddressCompany>
          <AddressCompany>{data.phone}</AddressCompany>
        </NameAddressBlock>
        <CompanyInfo>
          <CompanyInfoBlock>
            <CompanyInfoTitle>CSR Focus</CompanyInfoTitle>
            <CsrList>
              {data.crsFocus.length > 0 ? (
                data.crsFocus.map((item, index) => (
                  <CsrItem key={index}>{item}</CsrItem>
                ))
              ) : (
                <CsrItem>No information</CsrItem>
              )}
            </CsrList>
          </CompanyInfoBlock>
          <RevenueBlock>
            <CompanyInfoTitle>Revenue</CompanyInfoTitle>
            <RevenueText>{revenue}</RevenueText>
          </RevenueBlock>
        </CompanyInfo>
        <BtnsWrap>
          <StyledLikeBtn liked={data.like} id={data.id} />
          <ThemeProvider theme={theme.secondary}>
            <ProfileLink text="Profile" to={`/company/${data.id}`} />
          </ThemeProvider>
        </BtnsWrap>
      </Wrapper>
    </Root>
  );
}

const Root = styled.article`
  background-color: var(--white);
  border-radius: 6px;
  min-height: 268px;
  display: flex;
  @media (max-width: 1024px) {
    min-height: 284px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 168px 1fr;

  gap: 24px 16px;
  grid-template-areas:
    'ava nameAddress'
    'ava info'
    'ava buttons';
  padding: 26px 32px;
  /* grid-auto-rows: minmax(min-content, max-content); */
  flex-grow: 1;
  @media (max-width: 1024px) {
    grid-template-columns: 124px 1fr;
    padding: 24px 16px;
    grid-template-areas:
      'ava nameAddress'
      'ava info'
      'buttons buttons';
    gap: 16px;
  }
`;

const CardText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
`;

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ava;
  border: 1px solid var(--lightGray);
  border-radius: 6px;
  @media (max-width: 1024px) {
    min-height: 184px;
  }
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
const Logo = styled.img.attrs(() => ({
  src: companyIcon,
  alt: 'Company',
  width: 48,
  height: 48,
}))``;

const RankingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: 1px solid var(--lightGray);
  padding: 8px;
`;

const RankingTitle = styled(CardText)`
  margin-bottom: 2px;
`;
const RankingValue = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
`;

const NameAddressBlock = styled.div`
  grid-area: nameAddress;
`;
const NameCompany = styled(Link)`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
  margin-bottom: 12px;
  &:hover {
    text-decoration: underline;
  }
`;
const AddressCompany = styled(CardText)`
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CompanyInfo = styled.div`
  grid-area: info;
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--lightGray);
  @media (max-width: 1024px) {
    display: block;
    border: 0;
    padding: 0;
  }
`;
const CompanyInfoBlock = styled.div`
  flex-grow: 1;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -12px;
    height: calc(100% + 12px);
    width: 1px;
    background-color: var(--lightGray);
  }
  &:last-child::before {
    content: none;
  }
  @media (max-width: 1024px) {
    margin-bottom: 17px;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      content: none;
    }
  }
`;
const CompanyInfoTitle = styled(CardText)`
  margin-bottom: 4px;
`;
const CsrList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const CsrItem = styled.li`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  padding-left: 10px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }
  &:first-child {
    padding-left: 0;
  }
  &:first-child::before {
    content: none;
  }
`;
const RevenueBlock = styled(CompanyInfoBlock)`
  text-align: right;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;
const RevenueText = styled(CardText)`
  font-weight: 500;
  color: var(--black);
  @media (max-width: 1024px) {
    text-align: right;
  }
`;
const BtnsWrap = styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    grid-column: 1/-1;
  }
`;
const ProfileLink = styled(UiLink)`
  flex-grow: 1;
`;
const StyledLikeBtn = styled(LikeBtn)`
  margin-right: 8px;
`;

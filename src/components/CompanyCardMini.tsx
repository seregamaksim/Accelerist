import { Link } from 'react-router-dom';
import styled from 'styled-components';
import companyIcon from '../static/images/company.svg';
import { Company } from '../store/companies/types';

interface ICompanyCardMiniProps {
  data: Company;
  className?: string;
}

export default function CompanyCardMini({
  data,
  className,
}: ICompanyCardMiniProps) {
  return (
    <Root className={className}>
      <Wrapper>
        <Head>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <CompanyInfoWrap>
            <NameCompany to={`/company/${data.id}`}>{data.name}</NameCompany>
            <CompanyPriority>Priority Ranking 12</CompanyPriority>
          </CompanyInfoWrap>
        </Head>
        <MainInfoWrap>
          <CsrTitle>CSR Focus</CsrTitle>
          <CsrList>
            {data.crsFocus.length > 0 ? (
              data.crsFocus.map((item, index) => (
                <CsrItem key={index}>{item}</CsrItem>
              ))
            ) : (
              <CsrItem>No information</CsrItem>
            )}
          </CsrList>
        </MainInfoWrap>
      </Wrapper>
    </Root>
  );
}

const Root = styled.article`
  background-color: var(--white);
  border-radius: 6px;
`;

const Wrapper = styled.div`
  padding: 24px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const LogoWrap = styled.div`
  border-radius: 6px;
  border: 1px solid var(--lightGray);
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;
const Logo = styled.img.attrs(() => ({
  src: companyIcon,
  alt: 'Company',
  width: 24,
  height: 24,
}))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const CompanyInfoWrap = styled.div``;
const NameCompany = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  margin-bottom: 4px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`;
const CompanyPriority = styled.p`
  font-size: 12px;
  line-height: 18px;

  color: var(--darkGray);
`;

const MainInfoWrap = styled.div``;
const CsrTitle = styled.p`
  font-size: 12px;
  line-height: 18px;

  color: var(--darkGray);
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

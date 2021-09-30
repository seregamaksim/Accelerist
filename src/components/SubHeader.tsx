import { FC } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import backArrowIcon from '../static/images/back-arrow.svg';

interface ISubHeader {
  title: string;
  backBtn?: boolean;
  className?: string;
}

const SubHeader: FC<ISubHeader> = ({ title, className, backBtn = false }) => {
  const history = useHistory();

  return (
    <SubHeaderRoot className={className}>
      <SubHeaderContainer>
        <SubHeaderTitleWrap>
          {backBtn ? (
            <SubHeaderTitleLink to="" onClick={history.goBack}>
              <SubHeaderTitle>{title}</SubHeaderTitle>
            </SubHeaderTitleLink>
          ) : (
            <SubHeaderTitle>{title}</SubHeaderTitle>
          )}
        </SubHeaderTitleWrap>
      </SubHeaderContainer>
    </SubHeaderRoot>
  );
};

const SubHeaderRoot = styled.section`
  background-color: var(--white);
`;

const SubHeaderContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
`;

const SubHeaderTitleWrap = styled.div``;
const SubHeaderTitleLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding-left: 44px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 11px;
    transform: translateY(-50%);
    width: 12px;
    height: 20px;
    background: url(${backArrowIcon}) no-repeat center;
    background-size: cover;
  }
`;
const SubHeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;

  color: var(--black);
`;

export default SubHeader;

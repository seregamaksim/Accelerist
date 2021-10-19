import { FC } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import backArrowIcon from '../static/images/back-arrow.svg';
import SearchField from './SearchField';

interface ISubHeader {
  title: string;
  backBtn?: boolean;
  search?: boolean;
  className?: string;
}

const SubHeader: FC<ISubHeader> = ({
  title,
  className,
  backBtn = false,
  search = false,
}) => {
  const history = useHistory();

  return (
    <SubHeaderRoot className={className}>
      <SubHeaderContainer>
        <SubHeaderTitleWrap>
          {backBtn ? (
            <SubHeaderTitleLink onClick={history.goBack}>
              <SubHeaderTitle>{title}</SubHeaderTitle>
            </SubHeaderTitleLink>
          ) : (
            <SubHeaderTitle>{title}</SubHeaderTitle>
          )}
        </SubHeaderTitleWrap>
        {search && <SearchField />}
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
  display: flex;
  align-items: center;
`;

const SubHeaderTitleWrap = styled.div``;
const SubHeaderTitleLink = styled.button`
  cursor: pointer;
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

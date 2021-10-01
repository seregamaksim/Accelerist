import { FC } from 'react';
import styled from 'styled-components';

interface IContainer {
  className?: string;
}

const Container: FC<IContainer> = ({ children, className }) => {
  return <Root className={className}>{children}</Root>;
};

const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: var(--paddingL);
  padding-right: var(--paddingL);
  @media (min-width: 1440px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (max-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 1024px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default Container;

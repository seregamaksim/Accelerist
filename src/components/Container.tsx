import { FC } from 'react';
import styled, { DefaultTheme } from 'styled-components';

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
`;

export default Container;

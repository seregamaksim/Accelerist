import { FC } from 'react';
import styled from 'styled-components';

const AuthFormWrapper: FC = (props) => {
  return (
    <Root>
      <Wrapper>{props.children}</Wrapper>
    </Root>
  );
};

const Root = styled.div`
  background-color: var(--white);
  border-radius: 6px;
  max-width: 454px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 40px;
  @media (max-width: 600px) {
    padding: 24px 16px;
  }
`;

export default AuthFormWrapper;

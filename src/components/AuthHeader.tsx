import styled from 'styled-components';
import logo from '../static/images/header-logo.svg';

export default function AuthHeader() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <HeaderLogo />
      </HeaderContainer>
    </HeaderRoot>
  );
}

const HeaderRoot = styled.header`
  background-color: var(--black);
`;
const HeaderContainer = styled.div`
  padding: 22px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderLogo = styled.img.attrs(() => ({
  src: `${logo}`,
}))``;

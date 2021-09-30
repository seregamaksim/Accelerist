import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../static/images/header-logo-black.svg';
import Container from './Container';

export default function MainHeader() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <HeaderLogoLink to="/dashboard">
          <HeaderLogo />
        </HeaderLogoLink>
      </HeaderContainer>
    </HeaderRoot>
  );
}

const HeaderRoot = styled.header`
  background-color: var(--headerBlue);
`;
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 19px;
  padding-bottom: 19px;
`;
const HeaderLogoLink = styled(Link)``;
const HeaderLogo = styled.img.attrs(() => ({
  src: logo,
  alt: 'Logo',
}))`
  margin-right: 50px;
`;

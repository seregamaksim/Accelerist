import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../static/images/header-logo-black.svg';
import Container from './Container';
import HeaderUserInfo from './HeaderUserInfo';
import burgerIcon from '../static/images/burger.svg';
import closeMenuIcon from '../static/images/close-menu.svg';
import { useEffect, useState } from 'react';

export default function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenuClick(e: MouseEvent) {
    const target = e.target as Element;
    const parentTarget = target.closest('.mobile-menu');
    if (!parentTarget && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }
  useEffect(() => {
    window.addEventListener('click', closeMobileMenuClick);
    return () => {
      window.removeEventListener('click', closeMobileMenuClick);
    };
  }, [closeMobileMenuClick]);
  return (
    <>
      <Overlay isActive={isMobileMenuOpen} />
      <HeaderRoot>
        <HeaderContainer>
          <HeaderLogoLink to="/dashboard">
            <HeaderLogo />
          </HeaderLogoLink>
          <HeaderMobileMenuOpenBtn onClick={() => setIsMobileMenuOpen(true)} />
          <HeaderFixedMenuWrapper isActive={isMobileMenuOpen}>
            <HeaderMobileMenuCloseBtn
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <HeaderNavList>
              <HeaderNavItem>
                <HeaderNavLink to="/dashboard">Dashboard</HeaderNavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <HeaderNavLink to="/audience">Audience</HeaderNavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <HeaderNavLink to="/pricing">Pricing</HeaderNavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <HeaderNavLink to="/prospecting">Prospecting</HeaderNavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <HeaderNavLink to="/roi">ROI</HeaderNavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <HeaderNavLink to="/upgrade">Upgrade Membership</HeaderNavLink>
              </HeaderNavItem>
            </HeaderNavList>
            <HeaderUserInfo />
          </HeaderFixedMenuWrapper>
        </HeaderContainer>
      </HeaderRoot>
    </>
  );
}
const Overlay = styled.div<{ isActive: boolean }>`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  pointer-events: none;
  background: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease-out;
  z-index: 4;
  @media (max-width: 1024px) {
    display: block;
  }
`;
const HeaderRoot = styled.header`
  background-color: var(--headerBlue);
`;
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 19px;
  padding-bottom: 19px;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;
const HeaderLogoLink = styled(Link)``;
const HeaderLogo = styled.img.attrs(() => ({
  src: logo,
  alt: 'Logo',
}))`
  margin-right: 50px;
  @media (max-width: 500px) {
    width: 106px;
  }
`;

const HeaderFixedMenuWrapper = styled.div.attrs<{ isActive: boolean }>(
  (props) => ({
    className: props.isActive ? 'mobile-menu active' : 'mobile-menu',
  })
)<{ isActive: boolean }>`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: 330px;
    background-color: var(--white);
    padding: 130px 32px 32px 40px;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    z-index: 5;
    &.active {
      transform: translateX(0);
    }
  }
  @media (max-width: 500px) {
    max-width: none;
  }
`;
const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const HeaderNavItem = styled.li`
  margin-right: 28px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const HeaderNavLink = styled(NavLink)`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  &.active {
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 25px;
  }
`;
const HeaderMobileMenuOpenBtn = styled.button`
  display: none;
  font-size: 0;
  line-height: 0;
  width: 24px;
  height: 24px;
  background: url(${burgerIcon}) no-repeat center;
  background-size: contain;
  @media (max-width: 1024px) {
    display: block;
  }
`;
const HeaderMobileMenuCloseBtn = styled.button`
  display: none;
  font-size: 0;
  line-height: 0;
  width: 24px;
  height: 24px;
  background: url(${closeMenuIcon}) no-repeat center;
  background-size: contain;
  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 28px;
    right: 32px;
    z-index: 1;
  }
`;

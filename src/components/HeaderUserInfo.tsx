import styled from 'styled-components';
import { actions, selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import emptyUserIcon from '../static/images/user.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFullName } from '../helpers/getFullName';

export default function HeaderUserInfo() {
  const dispatch = useAppDispatch();

  const avatarKey = useAppSelector(selectors.auth.getAvatarKey);
  const userName = useAppSelector(selectors.auth.getUserName);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  function closeDropdownClick(e: MouseEvent) {
    const target = e.target as Element;
    const isDropdownParent = target.closest('.dropdown-parent');
    if (!isDropdownParent && isOpenDropdown) {
      setIsOpenDropdown(false);
    }
  }
  function closeDropdownEsc(e: KeyboardEvent) {
    const code = e.code;
    if (code === 'Escape') {
      setIsOpenDropdown(false);
    }
  }
  useEffect(() => {
    window.addEventListener('click', closeDropdownClick);
    return () => {
      window.removeEventListener('click', closeDropdownClick);
    };
  }, [closeDropdownClick]);

  useEffect(() => {
    window.addEventListener('keyup', closeDropdownEsc);
    return () => {
      window.removeEventListener('keyup', closeDropdownEsc);
    };
  }, [closeDropdownEsc]);
  return (
    <Root>
      <UserAvatarWrap>
        <UserAvatar
          src={avatarKey ? avatarKey : emptyUserIcon}
          $empty={avatarKey ? false : true}
        />
      </UserAvatarWrap>
      <UserName>{getFullName(userName)}</UserName>
      <DropdownOpenBtn onClick={() => setIsOpenDropdown(!isOpenDropdown)} />
      <Dropdown $open={isOpenDropdown}>
        <DropdownList>
          <DropdownItem>
            <DropdownLogout
              type="button"
              onClick={() => dispatch(actions.auth.signOut())}
            >
              Log out
            </DropdownLogout>
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    </Root>
  );
}

const Root = styled.div.attrs(() => ({
  className: 'dropdown-parent',
}))`
  display: flex;
  align-items: center;
  position: relative;
`;

const UserAvatarWrap = styled.div`
  background-color: var(--white);
  border-radius: 6px;
  width: 36px;
  height: 36px;
  overflow: hidden;
  position: relative;
  margin-right: 12px;
`;
const UserAvatar = styled.img.attrs<{ $empty?: boolean }>((props) => ({
  src: props.src,
  width: props.$empty ? '18px' : '36px',
  height: props.$empty ? '20px' : '36px',
  alt: props.$empty ? 'No photo' : 'User photo',
}))<{ $empty?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;
const UserName = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Dropdown = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: var(--white);
  box-shadow: 0px 2px 20px rgba(40, 31, 61, 0.04);
  border-radius: 6px;
  padding: 24px;
  min-width: 177px;
  display: ${(props) => (props.$open ? 'block' : 'none')};
  @media (max-width: 1024px) {
    top: auto;
    bottom: calc(100% + 10px);
    right: auto;
    left: 0;
  }
`;
const DropdownList = styled.ul``;
const DropdownItem = styled.li`
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const DropdownLink = styled(Link)`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
`;

const DropdownLogout = styled.button`
  font-size: 12px;
  line-height: 18px;
  color: var(--red);
  cursor: pointer;
`;

const DropdownOpenBtn = styled.button`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

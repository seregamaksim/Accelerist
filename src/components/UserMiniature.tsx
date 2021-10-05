import styled from 'styled-components';
import { getFullName } from '../helpers/getFullName';
import { IUser } from '../store/auth/types';
import Avatar from './Avatar';

interface IUserMiniatureProps {
  data: IUser;
  withRole?: boolean;
}

export default function UserMiniature({
  data,
  withRole = false,
}: IUserMiniatureProps) {
  const fullName = getFullName({
    firstName: data.firstName,
    lastName: data.lastName,
  });
  return (
    <Root>
      <StyledAvatar name={fullName} avatarKey={data.avatarKey} size={40} />
      <UserInfo>
        <UserName>{fullName}</UserName>
        {withRole && <UserRole>{data.role}</UserRole>}
      </UserInfo>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
`;
const StyledAvatar = styled(Avatar)`
  margin-right: 12px;
`;

const UserInfo = styled.div``;
const UserName = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  margin-bottom: 4px;
  text-transform: capitalize;
  &:last-child {
    margin-bottom: 0;
  }
`;
const UserRole = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  text-transform: capitalize;
`;

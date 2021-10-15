import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LikeHearth from '../static/images/LikeHearth';
import { actions } from '../store/ducks';
import { dislikeCompany, likeCompany } from '../store/favoriteCompanies/thunks';
import { useAppDispatch } from '../store/hooks';

interface ILikeBtnProps {
  id: string;
  liked: boolean;
  className?: string;
}

export default function LikeBtn({ className, liked, id }: ILikeBtnProps) {
  const dispatch = useAppDispatch();
  const [likeHearth, setLikeHearth] = useState<boolean>(liked);
  useEffect(() => {
    return () => {};
  }, []);
  function onSubmit() {
    if (liked) {
      dispatch(dislikeCompany(id)).then(() => {
        dispatch(actions.favoriteCompanies.removeItem(id));
        setLikeHearth(false);
      });
    } else {
      dispatch(likeCompany(id)).then(() => {
        setLikeHearth(true);
      });
    }
  }

  return (
    <Root className={className} onClick={onSubmit}>
      <LikeHearth liked={likeHearth ? 1 : 0} />
    </Root>
  );
}

const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid var(--lightGray);
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  &:hover {
    border-color: var(--gray);
  }
  &:focus {
    border-color: var(--red);
  }
`;

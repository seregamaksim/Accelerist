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
  const [likeHearth, setLikeHearth] = useState(liked ? 1 : 0);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    return () => {};
  }, [likeHearth]);
  function onSubmit() {
    setDisabled(true);
    if (likeHearth) {
      dispatch(dislikeCompany(id)).then(() => {
        dispatch(actions.favoriteCompanies.removeItem(id));
        setLikeHearth(0);
        setDisabled(false);
      });
    } else {
      dispatch(likeCompany(id)).then(() => {
        setLikeHearth(1);
        setDisabled(false);
      });
    }
  }

  return (
    <Root className={className} onClick={onSubmit} disabled={disabled}>
      <LikeHearth liked={likeHearth} />
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

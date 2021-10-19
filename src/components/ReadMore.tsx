import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
}
export const ReadMore = ({ children }: Props) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const needHide = text.slice(0, 255) !== text;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  console.log('needHide', needHide);

  return (
    <Root>
      <Text>{isReadMore && needHide ? `${text.slice(0, 250)}...` : text}</Text>
      {needHide && (
        <MoreBtn onClick={toggleReadMore}>
          {isReadMore ? 'see more' : ' see less'}
        </MoreBtn>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
`;
const MoreBtn = styled.button`
  font-size: 16px;
  line-height: 24px;
  color: var(--blue);
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

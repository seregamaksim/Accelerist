import React from 'react';
import styled from 'styled-components';

interface IButtonWithIconProps {
  icon: React.ReactNode;
  text: string;
  handleClick: () => void;
  className?: string;
}

export default function ButtonWithIcon({
  icon,
  text,
  handleClick,
  className,
}: IButtonWithIconProps) {
  return (
    <Root className={className} onClick={handleClick}>
      {icon}
      <span>{text}</span>
    </Root>
  );
}

const Root = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  cursor: pointer;
  svg {
    margin-right: 8px;
  }
`;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  rightIcon?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  className,
  type = 'button',
  disabled = false,
  onClick,
  icon,
  rightIcon = false,
}: Props) {
  return (
    <StyledButton
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
      $rightIcon={rightIcon}
    >
      {icon && icon}
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $rightIcon: boolean }>`
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => (props.$rightIcon ? 'row-reverse' : 'row')};
  justify-content: center;
  font-family: inherit;
  font-size: ${(props) => props.theme.fonts.size};
  line-height: ${(props) => props.theme.fonts.lineHeight};
  padding: ${(props) => props.theme.padding};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fonts.color};
  border: 1px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  transition: all 0.3s ease-out;
  outline: none;
  text-align: center;
  border-radius: 6px;
  &:hover {
    color: ${(props) => props.theme.hover.fonts.color};
    background-color: ${(props) => props.theme.hover.background};
    border-color: ${(props) => props.theme.hover.borderColor};
  }
  &:focus {
    color: ${(props) => props.theme.focus.fonts.color};
    background-color: ${(props) => props.theme.focus.background};
    border-color: ${(props) => props.theme.focus.borderColor};
  }

  &:disabled {
    color: ${(props) => props.theme.disabled.fonts.color};
    background-color: ${(props) => props.theme.disabled.background};
    border-color: ${(props) => props.theme.disabled.borderColor};
    cursor: not-allowed;
  }
  svg {
    margin: ${(props) => (props.$rightIcon ? '0 0 0 8px' : '0 8px 0 0')};
  }
`;

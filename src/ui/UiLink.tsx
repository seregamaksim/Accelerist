import { ComponentProps, ElementType, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  text: string;
  className?: string;
  to: string;
}

export default function UiLink({ text, className, to }: Props) {
  return (
    <StyledLink className={className} to={to}>
      {text}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
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
`;

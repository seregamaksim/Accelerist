import styled from 'styled-components';

interface Props {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  className,
  type = 'button',
  disabled = false,
  onClick,
}: Props) {
  return (
    <StyledButton
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
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

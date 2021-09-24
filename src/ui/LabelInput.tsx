import styled, { DefaultTheme } from 'styled-components';

interface ILabelInput {
  text: string;
  htmlFor?: string;
  className?: DefaultTheme;
}

export default function LabelInput({ text, htmlFor, className }: ILabelInput) {
  return (
    <Label className={className} htmlFor={htmlFor}>
      {text}
    </Label>
  );
}

const Label = styled.label.attrs(({ htmlFor, className }: ILabelInput) => ({
  htmlFor: htmlFor ? htmlFor : null,
  className: className,
}))`
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
`;

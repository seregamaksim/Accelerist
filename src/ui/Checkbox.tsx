import styled from 'styled-components';
import checkIcon from '../static/images/check.svg';
import checkDisabledIcon from '../static/images/check-disabled.svg';
import { Field } from 'formik';

interface ICheckbox {
  name: string;
  label: string;
  id: string;
  checked?: boolean;
}

export default function Checkbox({
  name,
  label,
  id,
  checked = false,
}: ICheckbox) {
  return (
    <Wrapper>
      <Input name={name} id={id} checked={checked} />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
const Label = styled.label`
  display: block;
  position: relative;
  font-size: 16px;
  line-height: 25px;
  color: var(--black);
  padding-left: 28px;
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: all 0.3s ease-out;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid var(--gray);
    background-color: var(--white);
  }
  &::after {
    left: 3px;
    width: 15px;
    height: 11px;
    opacity: 0;
    background: url(${checkIcon}) no-repeat center;
    background-size: cover;
  }
`;

const Input = styled(Field).attrs((props) => ({
  type: 'checkbox',
  className: 'visually-hidden',
}))`
  &:checked + ${Label} {
    &::before {
      border-color: var(--secondaryBlue);
      background-color: var(--secondaryBlue);
    }
    &::after {
      opacity: 1;
    }
  }
  &:disabled + ${Label} {
    color: var(--gray);
    &::before {
      border-color: var(--gray);
    }
  }
  &:disabled:checked + ${Label} {
    color: var(--gray);
    &::before {
      border-color: #f0f0f0;
      background-color: #f0f0f0;
    }
    &::after {
      background-image: url(${checkDisabledIcon});
    }
  }
`;

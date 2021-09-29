import { useState } from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import hideEye from '../static/images/password-eye-hide.svg';
import showEye from '../static/images/password-eye-show.svg';

interface IFormInput {
  placeholder?: string;
  id: string;
  name: string;
  type: string;
  className?: string;
}

export default function FormInput({
  placeholder,
  id,
  name,
  type,
  className,
}: IFormInput) {
  const [currentType, setCurrentType] = useState(type);
  const [isHidePassword, setIsHidePassword] = useState(true);

  function changeType() {
    if (currentType === 'password') {
      setCurrentType('text');
      setIsHidePassword(!isHidePassword);
    } else if ('text') {
      setCurrentType('password');
      setIsHidePassword(!isHidePassword);
    }
  }

  return (
    <StyledFieldWrap>
      <StyledField
        placeholder={placeholder}
        id={id}
        name={name}
        type={currentType}
        className={className}
      />
      {type === 'password' && (
        <BtnShowPassword
          isHide={isHidePassword}
          type="button"
          onClick={changeType}
        />
      )}
    </StyledFieldWrap>
  );
}
const StyledFieldWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
const StyledField = styled(Field)`
  display: block;
  flex-grow: 1;
  font-size: 16px;
  line-height: 25px;
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--lightGray);
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.3s ease-out;
  outline: none;
  &::placeholder {
    color: var(--darkGray);
  }
  &:focus {
    border-color: var(--blue);
    caret-color: var(--blue);
  }
  &:disabled {
    background-color: var(--disabledGray);
    color: var(--gray);
    border-color: var(--disabledGray);
  }
  &.error {
    border-color: var(--red);
    background-color: #fff2f2;
  }
`;
const BtnShowPassword = styled.button<{ isHide: boolean }>`
  border: 0;
  background: none;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 16px;
  z-index: 1;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  background-image: url(${(props) => (props.isHide ? hideEye : showEye)});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

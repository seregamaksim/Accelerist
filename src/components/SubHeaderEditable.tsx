import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import EditIcon from '../static/images/EditIcon';
import { Item } from '../store/savedItem/types';
import { theme } from '../theme';
import Button from '../ui/Button';
import Container from './Container';

interface ISubHeaderEditableProps {
  title: string | null;
  data: Item;
  className?: string;
  isInput: boolean;
  // setIsInput: (val: boolean) => void;
  setIsInput: Dispatch<SetStateAction<boolean>>;
}

export default function SubHeaderEditable({
  title,
  className,
  data,
  isInput,
  setIsInput,
}: ISubHeaderEditableProps) {
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    setInputVal(title ? title : '');
  }, [title]);
  return (
    <Root className={className}>
      <StyledContainer>
        <SubHeaderTitleWrap>
          {isInput ? (
            <NameItemInput
              placeholder="No name"
              value={inputVal}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputVal(e.currentTarget.value)
              }
            />
          ) : (
            <SubHeaderTitle>{data.name ? data.name : 'No name'}</SubHeaderTitle>
          )}
        </SubHeaderTitleWrap>
        <Buttons>
          {isInput ? (
            <>
              <ThemeProvider theme={theme.secondary}>
                <StyledButton
                  text="Save"
                  onClick={() => setIsInput(false)}
                  type="button"
                />
              </ThemeProvider>
              <ThemeProvider theme={theme.deleteTheme}>
                <StyledButton
                  text="Cancel"
                  onClick={() => setIsInput(false)}
                  type="button"
                />
              </ThemeProvider>
            </>
          ) : (
            <>
              <ThemeProvider theme={theme.secondary}>
                <StyledButton
                  text="Edit"
                  icon={<EditIcon />}
                  onClick={() => setIsInput(true)}
                  type="button"
                />
              </ThemeProvider>
              <ThemeProvider theme={theme.deleteTheme}>
                <StyledButton
                  text="Delete"
                  onClick={() => console.log('delete')}
                  type="button"
                />
              </ThemeProvider>
            </>
          )}
        </Buttons>
      </StyledContainer>
    </Root>
  );
}
const Root = styled.section`
  background-color: var(--white);
`;

const StyledContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SubHeaderTitleWrap = styled.div`
  /* width: 100%;
  max-width: 850px; */
  flex-grow: 1;
  margin-right: 30px;
`;
const SubHeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;

  color: var(--black);
`;

const NameItemInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  font-family: inherit;
  width: 100%;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: var(--black);
  border: 0;
  padding: 0;
  outline: none;
  &::placeholder {
    color: var(--darkGray);
  }
  &:focus {
    caret-color: var(--blue);
  }
`;
const Buttons = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  margin-right: 8px;
  min-width: 82px;
  &:last-child {
    margin-right: 0;
  }
`;

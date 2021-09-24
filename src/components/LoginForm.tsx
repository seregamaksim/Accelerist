import styled, { ThemeProvider } from 'styled-components';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import LabelInput from '../ui/LabelInput';
import FormInput from '../ui/FormInput';
import Button from '../ui/Button';
import { theme } from '../theme';
import { Link } from 'react-router-dom';
import Checkbox from '../ui/Checkbox';

interface IFormValues {
  email: string;
  password: string;
  rememberPassword: boolean;
}

export default function LoginForm() {
  const initialValues: IFormValues = {
    email: '',
    password: '',
    rememberPassword: false,
  };

  return (
    <>
      <Title>Welcome to Accelerist</Title>

      <TogglerForm>
        <ToggleLink to="/signup" $current={false}>
          Register
        </ToggleLink>
        <ToggleLink to="/login" $current={true}>
          Login
        </ToggleLink>
      </TogglerForm>
      <StyledFormik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }: FormikHelpers<IFormValues>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ values }) => (
          <Form>
            <InputsContainer>
              <InputWrap>
                <StyledLabelInput text="Email" htmlFor="email" />
                <FormInput
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  type="email"
                />
              </InputWrap>
              <InputWrap>
                <StyledLabelInput text="Password" htmlFor="password" />
                <FormInput
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </InputWrap>
            </InputsContainer>
            <RememberForgotWrap>
              <Checkbox
                id="rememberPassword"
                name="rememberPassword"
                label="Remember"
                checked={values.rememberPassword}
              />
              <ForgotLink to="/reset">Forgot Password?</ForgotLink>
            </RememberForgotWrap>
            <ThemeProvider theme={theme.primary}>
              <StyledButton text="Login" />
            </ThemeProvider>
          </Form>
        )}
      </StyledFormik>
    </>
  );
}

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--black);
  margin-bottom: 25px;
  text-align: center;
`;

const TogglerForm = styled.div`
  padding: 2px 3.5px;
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  border-radius: 6px;
  margin-bottom: 32px;
`;

const ToggleLink = styled(Link)<{ $current?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  padding: 9px 15px;
  font-size: 12px;
  line-height: 18px;
  border-radius: 6px;
  color: ${({ $current }) => ($current ? 'var(--black)' : 'var(--darkGray)')};
  background-color: ${({ $current }) =>
    $current ? 'var(--secondaryBlue)' : 'transparent'};
`;

const StyledFormik = styled(Formik)`` as unknown as typeof Formik;

const StyledLabelInput = styled(LabelInput)`
  margin-bottom: 4px;
`;
const InputsContainer = styled.div`
  margin-bottom: 12px;
`;
const InputWrap = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-weight: 500;
`;

const RememberForgotWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const ForgotLink = styled(Link)`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
`;

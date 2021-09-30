import styled, { ThemeProvider } from 'styled-components';
import { Formik, Form } from 'formik';
import LabelInput from '../ui/LabelInput';
import FormInput from '../ui/FormInput';
import Button from '../ui/Button';
import { theme } from '../theme';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { signUpPost } from '../store/auth/thunks';
import * as Yup from 'yup';

export interface IRegistrationFormValues {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect email format').required('Required'),
  password: Yup.string()
    .min(6, 'Minimum password length is 6 symbols')
    .required('Required'),
});

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const initialValues: IRegistrationFormValues = {
    email: '',
    password: '',
  };

  function submitVal(values: IRegistrationFormValues) {
    dispatch(signUpPost(values)).then((data) => {
      if (data.type.includes('fulfilled')) {
        history.push('/dashboard');
      }
    });
  }
  return (
    <>
      <Title>Welcome to Accelerist</Title>

      <TogglerForm>
        <ToggleLink to="/signup" $current={true}>
          Register
        </ToggleLink>
        <ToggleLink to="/login" $current={false}>
          Login
        </ToggleLink>
      </TogglerForm>
      <StyledFormik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={submitVal}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <InputsContainer>
              <InputWrap>
                <StyledLabelInput text="Email" htmlFor="email" />
                <FormInput
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  type="email"
                  className={errors.email && touched.email ? 'error' : ''}
                />
                {errors.email && touched.email ? (
                  <InputErrorText>{errors.email}</InputErrorText>
                ) : null}
              </InputWrap>
              <InputWrap>
                <StyledLabelInput text="Password" htmlFor="password" />
                <FormInput
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  className={errors.password && touched.password ? 'error' : ''}
                />
                {errors.password && touched.password ? (
                  <InputErrorText>{errors.password}</InputErrorText>
                ) : null}
              </InputWrap>
            </InputsContainer>
            <TextPrivacyPolicy>
              I agree that by clicking <b>“Registration”</b> I accept the{' '}
              <Link to="#">
                <b>Terms Of Service</b>
              </Link>{' '}
              and{' '}
              <Link to="#">
                <b>Privacy Policy</b>
              </Link>
            </TextPrivacyPolicy>

            <ThemeProvider theme={theme.primary}>
              <StyledButton
                text="Registration"
                type="submit"
                disabled={!isValid}
              />
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
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const TogglerForm = styled.div`
  padding: 2px 3.5px;
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  border-radius: 6px;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
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
  margin-bottom: 42px;
  @media (max-width: 600px) {
    margin-bottom: 24px;
  }
`;
const InputWrap = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;
const InputErrorText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--red);
  margin-top: 8px;
`;
const StyledButton = styled(Button).attrs(() => ({
  type: 'submit',
}))`
  width: 100%;
  font-weight: 500;
`;

const TextPrivacyPolicy = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: var(--black);
  margin-bottom: 18px;
  & a {
    color: var(--black);
  }
  & a:hover {
    text-decoration: underline;
  }
  & b {
    font-weight: 500;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

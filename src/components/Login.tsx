import styled from 'styled-components';
import Header from './Header';
import background from '../static/images/auth-bg.png';
import AuthFormWrapper from './AuthFormWrapper';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <Root>
      <Header />
      <Container>
        <AuthFormWrapper>
          <LoginForm />
        </AuthFormWrapper>
      </Container>
    </Root>
  );
}
const Root = styled.section`
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
const Container = styled.div`
  padding-top: 72px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  max-width: 1440px;
`;

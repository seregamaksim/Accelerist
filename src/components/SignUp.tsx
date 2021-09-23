import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import background from '../static/images/auth-bg.png';

export default function SignUp() {
  return (
    <Root>
      <Header />
      <h1>SignUp</h1>
      <Link to="/login">Login link</Link>
      <Link to="/signup">signup link</Link>
    </Root>
  );
}

const Root = styled.section`
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

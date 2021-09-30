import styled from 'styled-components';
import AuthHeader from '../components/AuthHeader';
import background from '../static/images/auth-bg.png';
import RegisterForm from '../components/RegisterForm';
import AuthFormWrapper from '../components/AuthFormWrapper';
import { Link } from 'react-router-dom';
import linkedinIcon from '../static/images/linkedin.svg';

export default function SignUp() {
  return (
    <Root>
      <AuthHeader />
      <Container>
        <AuthFormWrapper>
          <RegisterForm />
          <OtherAuthWrap>
            <OtherAuthText>or continue with</OtherAuthText>
            <OtherAuthList>
              <OtherAuthItem>
                <OtherAuthItemLink to="#" />
                <OtherAuthItemIcon src={linkedinIcon} alt="LinkedIn" />
              </OtherAuthItem>
            </OtherAuthList>
          </OtherAuthWrap>
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
  margin: 0 auto;
  @media (max-width: 600px) {
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const OtherAuthWrap = styled.div`
  margin-top: 32px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;
const OtherAuthText = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: var(--darkGray);
  margin-bottom: 24px;
`;
const OtherAuthList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OtherAuthItem = styled.li`
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;
const OtherAuthItemLink = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;
const OtherAuthItemIcon = styled.img``;

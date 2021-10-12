import { FC } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';

const MainLayout: FC = (props) => {
  return (
    <>
      <MainHeader />
      <MainWrapper>{props.children}</MainWrapper>
    </>
  );
};
const MainWrapper = styled.div`
  height: 100%;
`;
export default MainLayout;

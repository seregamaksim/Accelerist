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
  height: calc(100% - 80px);
`;
export default MainLayout;

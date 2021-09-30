import { FC } from 'react';
import MainHeader from '../components/MainHeader';

const MainLayout: FC = (props) => {
  return (
    <>
      <MainHeader />
      <div>{props.children}</div>
    </>
  );
};

export default MainLayout;

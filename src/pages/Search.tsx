import styled from 'styled-components';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';

export default function Search() {
  return (
    <MainLayout>
      <StyledSubHeader title="Search" search={true}></StyledSubHeader>
    </MainLayout>
  );
}

const StyledSubHeader = styled(SubHeader)`
  margin-bottom: 32px;
`;

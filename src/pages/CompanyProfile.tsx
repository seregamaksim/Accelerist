import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import SubHeader from '../components/SubHeader';
import MainLayout from '../layouts/MainLayout';
import { http } from '../services/http';
import { Company } from '../store/companies/types';

export default function CompanyProfile() {
  const { id } = useParams<{ id: string }>();
  const [companyData, setCompanyData] = useState<Company>();

  useEffect(() => {
    const fetchCompanyData = http.get(`/companies/${id}`);
    fetchCompanyData.then(({ data }: AxiosResponse<Company>) => {
      // console.log('res', data);
      setCompanyData(data);
    });
  }, []);

  console.log('params', id);

  return (
    <MainLayout>
      <StyledSubHeader title="Corparate Profile" backBtn />
      <h1>{companyData?.name}</h1>
    </MainLayout>
  );
}

const StyledSubHeader = styled(SubHeader)`
  margin-bottom: 32px;
`;

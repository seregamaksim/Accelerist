import styled from 'styled-components';
import CompanyCardMini from './CompanyCardMini';
import CompanyCard from './CompanyCard';
import { Company } from '../store/companies/types';

interface IFavoritesListProps {
  data: Company[];
  className?: string;
  miniCards?: boolean;
}

export default function FavoritesList({
  data,
  miniCards = false,
  ...props
}: IFavoritesListProps) {
  return (
    <Root {...props}>
      <ContentWrapper>
        {data.map((item) =>
          miniCards ? (
            <CompanyCardMini key={item.id} data={item} />
          ) : (
            <CompanyCard key={item.id} />
          )
        )}
      </ContentWrapper>
    </Root>
  );
}

const Root = styled.section``;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

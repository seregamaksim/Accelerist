import styled from 'styled-components';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';
import { Item } from '../store/savedList/types';
import SavedItem from './SavedItem';

interface ISavedListProps {
  data: Item[];
  className?: string;
}

export default function SavedList({ data, ...props }: ISavedListProps) {
  // const items = useAppSelector(selectors.savedList.selectSavedList);

  return (
    <Root {...props}>
      <ContentWrapper>
        {data.map((item) => (
          <SavedItem key={item.id} data={item} />
        ))}
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

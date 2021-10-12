import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Item } from '../store/savedList/types';
import UserMiniature from './UserMiniature';
import moment from 'moment';

interface ISavedItemProps {
  data: Item;
  className?: string;
}

export default function SavedItem({ data, className }: ISavedItemProps) {
  const [filters, setFilters] = useState<string[]>(
    data.filters ? Object.values(data.filters) : ['']
  );
  const dateUpdate = moment(data.updatedAt).format('D MMM YYYY');

  return (
    <Root className={className}>
      <ItemWrapper>
        <ItemHead>
          <ItemHeadLink to={`/prospects/${data.id}/`}>{data.name}</ItemHeadLink>
        </ItemHead>
        <ItemContent>
          <ItemFiltersWrap>
            <ItemFiltersTitle>Filters</ItemFiltersTitle>
            <ItemFiltersList>
              {filters.map((item, index) =>
                item.length > 0 ? (
                  <ItemFiltersItem key={index}>{item}</ItemFiltersItem>
                ) : null
              )}
            </ItemFiltersList>
          </ItemFiltersWrap>
          <ItemProspectsCounterDataList>
            <ItemProspectsCounterDataItem>
              <ItemProspectsCounterDataItemTitle>
                № of Prospects Available
              </ItemProspectsCounterDataItemTitle>
              <ItemProspectsCounterDataItemCount>
                {data.prospectsAvailable}
              </ItemProspectsCounterDataItemCount>
            </ItemProspectsCounterDataItem>
          </ItemProspectsCounterDataList>
          <ItemLastUserInfo>
            <UserMiniature data={data.lastAuthor} withRole={true} />
            <ItemLastActivityWrap>
              <ItemLastActivityTitle>Last Activity</ItemLastActivityTitle>
              <ItemLastActivityDate>{dateUpdate}</ItemLastActivityDate>
            </ItemLastActivityWrap>
          </ItemLastUserInfo>
        </ItemContent>
      </ItemWrapper>
    </Root>
  );
}

const Root = styled.article`
  background-color: var(--white);
  border-radius: 6px;
`;

const ItemWrapper = styled.div`
  padding: 24px;
`;
const ItemHead = styled.div`
  padding-bottom: 9px;
  border-bottom: 1px solid var(--lightGray);
  margin-bottom: 16px;
`;
const ItemHeadLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
`;
const ItemContent = styled.div``;
const ItemFiltersWrap = styled.div`
  margin-bottom: 24px;
`;
const ItemFiltersTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  margin-bottom: 8px;
`;
const ItemFiltersList = styled.ul`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(10px, max-content));
  /* flex-wrap: wrap; */
`;
const ItemFiltersItem = styled.li`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
  padding: 6px 10px;
  border: 1px solid var(--secondaryBlue);
  border-radius: 6px;
  text-transform: capitalize;
`;
const ItemProspectsCounterDataList = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  margin-bottom: 24px;
`;
const ItemProspectsCounterDataItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--disabledGray);
  border-radius: 4px;
  padding: 5px 15px;
`;
const ItemProspectsCounterDataItemTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  margin-bottom: 8px;
  text-align: center;
`;
const ItemProspectsCounterDataItemCount = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--black);
  text-align: center;
`;

const ItemLastUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemLastActivityWrap = styled.div`
  text-align: right;
`;
const ItemLastActivityTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  margin-bottom: 4px;
`;

const ItemLastActivityDate = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
`;

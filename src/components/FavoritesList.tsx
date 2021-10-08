import styled, { ThemeProvider } from 'styled-components';
import { selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import SavedItem from './SavedItem';
import emptyHeartIcon from '../static/images/hearts-empty.svg';
import UiLink from '../ui/UiLink';
import { theme } from '../theme';
import { useEffect } from 'react';
import { fetchFavoritesList } from '../store/favoriteCompanies/thunks';
import CompanyCardMini from './CompanyCardMini';
import CompanyCard from './CompanyCard';

interface IFavoritesListProps {
  className?: string;
  miniCards?: boolean;
}

export default function FavoritesList({
  miniCards = false,
  ...props
}: IFavoritesListProps) {
  const items = useAppSelector(selectors.favoriteCompanies.selectFavoritesList);
  const dispatch = useAppDispatch();
  const query = {
    page: 1,
    limit: 6,
  };
  useEffect(() => {
    dispatch(fetchFavoritesList(query));
  }, []);
  return (
    <Root {...props}>
      {items.length > 0 ? (
        <ContentWrapper>
          {items.map((item) =>
            miniCards ? (
              <CompanyCardMini key={item.id} data={item} />
            ) : (
              <CompanyCard key={item.id} />
            )
          )}
        </ContentWrapper>
      ) : (
        <EmptyList>
          <EmptyListContent>
            <EmptyListIcon />
            <EmptyListTitle>No favorite company</EmptyListTitle>
            <EmptyListText>
              Go to the search page and add to favorites
            </EmptyListText>
            <ThemeProvider theme={theme.secondary}>
              <EmptyListLink text="Search" to="/search" />
            </ThemeProvider>
          </EmptyListContent>
        </EmptyList>
      )}
    </Root>
  );
}

const Root = styled.section``;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  padding: 33px;
  height: 100%;
`;

const EmptyListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EmptyListIcon = styled.img.attrs(() => ({
  src: emptyHeartIcon,
  alt: 'No favorite company',
  width: 103,
  height: 93,
}))`
  margin-bottom: 25px;
`;
const EmptyListTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: var(--black);
  margin-bottom: 8px;
`;
const EmptyListText = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: var(--gray);
  margin-bottom: 32px;
`;
const EmptyListLink = styled(UiLink)`
  min-width: 244px;
`;

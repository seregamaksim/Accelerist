import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import UiLink from '../ui/UiLink';
import emptyIcon from '../static/images/empty.svg';
interface IEmptySavedListProps {
  className?: string;
}
export default function EmptySavedList({ className }: IEmptySavedListProps) {
  return (
    <Root className={className}>
      <EmptyList>
        <EmptyListContent>
          <EmptyListIcon />
          <EmptyListTitle>No lists saved</EmptyListTitle>
          <EmptyListText>Go to search page and add to saved list</EmptyListText>
          <ThemeProvider theme={theme.secondary}>
            <EmptyListLink text="Search" to="/search" />
          </ThemeProvider>
        </EmptyListContent>
      </EmptyList>
    </Root>
  );
}

const Root = styled.section``;
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
  src: emptyIcon,
  alt: 'No lists saved',
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

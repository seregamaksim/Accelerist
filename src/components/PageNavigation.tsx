import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useBorberNavigation } from '../hooks/useBorberNavigation';
import { useAppDispatch } from '../store/hooks';
import backArrow from '../static/images/back-arrow.svg';
import qs from 'qs';
import { useQuery } from '../hooks/useQuery';

interface IPageNavigationProps {
  call: any;
  metaData: {
    currentPage: string;
    itemCount: number;
    itemsPerPage: string;
    totalItems: number;
    totalPages: number;
  };
  queryParams?: any;
  className?: string;
  showOnlyQueryPage?: boolean;
}

export default function PageNavigation({
  call,
  metaData,
  className,
  queryParams,
  showOnlyQueryPage = false,
}: IPageNavigationProps) {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const queryPage = useQuery();
  const navigationBorders = useBorberNavigation(metaData);

  function queryCreator(queryParams?: any, page: number = 1) {
    return {
      limit: 12,
      page: page,
      ...queryParams,
    };
  }

  function fetchNavigate(direction: string) {
    const currentPage =
      direction === 'prev'
        ? Number(metaData.currentPage) - 1
        : Number(metaData.currentPage) + 1;
    dispatch(call(queryCreator(queryParams, currentPage)));
    history.push({
      search: showOnlyQueryPage
        ? `?page=${currentPage}`
        : `?page=${currentPage}&${qs.stringify(queryParams)}`,
    });
  }

  useEffect(() => {
    const currentPage = queryPage.get('page')
      ? Number(queryPage.get('page'))
      : 1;
    history.push({
      search: showOnlyQueryPage
        ? `?page=${currentPage}`
        : `?page=${currentPage}&${qs.stringify(queryParams)}`,
    });
  }, []);

  return metaData.totalItems > 0 ? (
    <Root className={className}>
      {Number(metaData.currentPage) !== 1 ? (
        <PageNavigationBtn onClick={() => fetchNavigate('prev')} />
      ) : null}
      <PageNavigationCounter>{navigationBorders}</PageNavigationCounter>
      {Number(metaData.currentPage) !== metaData.totalPages ? (
        <PageNavigationBtn
          $rotate={true}
          onClick={() => fetchNavigate('next')}
        />
      ) : null}
    </Root>
  ) : null;
}
const Root = styled.div`
  display: flex;
  align-items: center;
`;
const PageNavigationBtn = styled.button<{ $rotate?: boolean }>`
  width: 24px;
  height: 24px;
  background: url(${backArrow}) no-repeat center;
  background-size: 12px 20px;
  ${(props) => (props.$rotate ? 'transform: rotate(180deg)' : '')};
  cursor: pointer;
`;

const PageNavigationCounter = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--black);
`;

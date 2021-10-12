import { AsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../store/hooks';
import { AppThunk } from '../store/store';

interface IPageNavigationProps {
  call: any;
}

export default function PageNavigation({ call }: IPageNavigationProps) {
  const dispatch = useAppDispatch();
  // useEffect()
  return <Root></Root>;
}
const Root = styled.div`
  display: flex;
  align-items: center;
`;

import moment from 'moment';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchLastLogins } from '../store/lastLogins/thunks';
import { fetchTeam } from '../store/team/thunks';
import UserMiniature from './UserMiniature';
import backArrow from '../static/images/back-arrow.svg';

export default function Reports() {
  const dispatch = useAppDispatch();
  const teamData = useAppSelector(selectors.team.selectTeam);
  const lastLogins = useAppSelector(selectors.lastLogins.selectLastLogins);
  useEffect(() => {
    dispatch(fetchTeam());
    dispatch(fetchLastLogins());
  }, [dispatch]);

  return (
    <Root>
      <Wrapper>
        <Section oneColumn>
          <SectionTitle>Search Sessions</SectionTitle>
          <InfoBlock>
            <InfoBlockTitle>Total</InfoBlockTitle>
            <InfoBlockCount>{teamData?.searchCount}</InfoBlockCount>
          </InfoBlock>
        </Section>
        <Section oneColumn>
          <SectionTitle>Sent Pitches</SectionTitle>
          <InfoBlock>
            <InfoBlockTitle>Company</InfoBlockTitle>
            <InfoBlockCount>{teamData?.pitchCount}</InfoBlockCount>
          </InfoBlock>
        </Section>
        <Section>
          <SectionTitle>Prospect Navigator</SectionTitle>
          <ProspectLink
            target="_blank"
            to={{ pathname: 'https://accelerist.com/insights-2/' }}
          >
            Go to page
          </ProspectLink>
        </Section>
        <Section>
          <SectionTitle>Last Login</SectionTitle>
          <LastLoginsList>
            {lastLogins.length > 0
              ? lastLogins.map((item) => (
                  <LastLoginsItem key={item.id}>
                    <UserMiniature data={item.user} sizeImg={32} />
                    <LastLoginDate>
                      {moment(item.loggedInAt).format('D MMM YYYY')}
                    </LastLoginDate>
                  </LastLoginsItem>
                ))
              : null}
          </LastLoginsList>
        </Section>
      </Wrapper>
    </Root>
  );
}

const Root = styled.section`
  background-color: var(--white);
  border-radius: 6px;
`;
const Wrapper = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 18px;
`;
const Section = styled.div<{ oneColumn?: boolean }>`
  grid-column: ${(props) => (props.oneColumn ? 'span 1' : '1/-1')};
`;
const SectionTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--black);
  margin-bottom: 16px;
`;

const InfoBlock = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 4px;
`;
const InfoBlockTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--darkGray);
  margin-bottom: 8px;
  text-align: center;
`;
const InfoBlockCount = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--black);
  text-align: center;
`;
const LastLoginsList = styled.ul``;
const LastLoginsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 8px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(100% - 42px);
    height: 1px;
    background-color: #eeeeee;
  }
  &:last-child::before {
    content: none;
  }
`;
const LastLoginDate = styled.p`
  font-size: 12px;
  line-height: 18px;

  color: var(--darkGray);
`;
const ProspectLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 24px;
  height: 71px;
  background-color: #f9f9f9;
  color: var(--black);
  border-radius: 4px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%) rotate(180deg);
    width: 12px;
    height: 20px;
    background: url(${backArrow}) no-repeat center;
    background-size: cover;
  }
`;

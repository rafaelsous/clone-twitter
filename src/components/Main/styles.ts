import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  text-align: left;
  padding: 8px 0 9px 13px;
  background: var(--primary);
  border-bottom: 1px solid var(--outline);
  z-index: 5;

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 8px min(46px, max(10vw, 10px));
  background: var(--primary);
  border-top: 1px solid var(--outline);
  z-index: 5;

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  transition: fill .2s;

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
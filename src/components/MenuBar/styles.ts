import styled, { css } from 'styled-components';
import { Home, Notifications, Email, FavoriteBorder, Person, Rocketseat, ExitToApp } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;
  margin-bottom: 20px;

  > path {
    fill: var(--twitter);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8.25px 0;
  outline: 0;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover, &.active {
    span, svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  } 

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    padding-right: 15px;

    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
  }

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    width: 40px;
    height: 40px;
    margin-top: 33px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS};
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS};
`;

export const EmailIcon = styled(Email)`
  ${iconCSS};
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS};
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS};
`;

BotSide,
Avatar,
ProfileData,

export const ExitIcon = styled(ExitToApp)`
  ${iconCSS};
`;
import styled from 'styled-components';
import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(339px, 100%); 
  }
`;

export const SearchWrapper = styled.div`
  width: min(339px, 100%);
  max-height: 57px;
  padding: 10px 24px;
  position: fixed;
  top: 0;
  background: var(--primary);
  z-index: 5;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  font-size: 14px;
  background: var(--search);
  outline: 0;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    transition: 180ms ease-in-out;
    z-index: 1;
  }

  &:focus {
    border: 1px solid var(--twitter);
    background: var(--primary);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  padding: 57px 24px 200px;

  > div + div {
    margin-top: 15px;
  }
`;
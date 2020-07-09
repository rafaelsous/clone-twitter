import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  font-size: 15px;
  font-weight: bold;
  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
  outline: 0;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

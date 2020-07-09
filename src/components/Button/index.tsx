import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  padding: 16px;
  background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'};
  color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)'};
  border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: ${props => props.outlined
      ? 'var(--twitter-dark-hover)'
      : 'var(--twitter-light-hover)'};
  }
`;
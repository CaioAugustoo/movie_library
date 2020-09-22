import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  height: 3.5rem;
  z-index: 2;
  top: 0;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    background: var(--gray);
  }
`;
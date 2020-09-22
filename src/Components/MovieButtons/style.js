import styled from 'styled-components';

export const MoviesCTA = styled.button`
  background-color: var(--white);
  color: var(--secondary);
  border: none;
  border-radius: 6.25rem;
  padding: 0.625rem 1.5625rem;
  border: 0.0625rem solid var(--secondary);
  transition: all 0.3s ease;
  cursor: pointer;
  transform: scale(1.1);

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    transform: scale(0.8);
  }

  &:hover {
    transform: scale(1.15);
    border: 1px solid var(--secondary);
    color: var(--white);
    background-color: var(--secondary) ;

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      transform: scale(0.8);
    }
  }
`;

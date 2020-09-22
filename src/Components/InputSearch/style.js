import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 6.25rem 0rem 0rem;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    padding: 0rem 1.25rem 0rem 0rem;
  }
`;

export const Input = styled.input`
  background-color: var(--secondary);
  border: 0.0625rem solid var(--secondary);
  border-radius: 6.25rem;
  padding: 0.4375rem 0.9375rem 0.4375rem 0.9375rem;
  margin: 12px 0;
  max-width: 7.5rem;
  outline: none;
  color: var(--white);
  box-shadow: var(--shadow-input);
  transition: all .3s ease;


  &::placeholder {
    color: var(--white);
  }

`;
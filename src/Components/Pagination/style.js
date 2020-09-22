import styled from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 3.125rem 5rem 3.125rem;
  align-items: center;
  
  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    margin: 0rem 1.2rem;
  }

  svg {
    font-size: 0.7rem;
    padding-bottom: -0.0625rem;
  }
`;

export const PaginationButton = styled.button`
  background-color: #263238;
  color: #ffffff;
  border: none;
  border-radius: 6.25rem;
  padding: 0.625rem 1.5625rem;
  border: 0.0625rem solid #263238;
  transition: all 0.3s ease;
  cursor: pointer;
  transform: scale(1.1);

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    transform: scale(0.9) !important;
  }

  &:hover {
    transform: scale(1.15);
    border: 0.0625rem solid #263238;
    color: #263238;
    background-color: #ffffff;
  }
`;

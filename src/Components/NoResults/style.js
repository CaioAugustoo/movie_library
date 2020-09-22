import styled from 'styled-components';

export const NoResultsSection = styled.section`
  text-align: center;
  margin: 3.125rem auto;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    img {
      width: 18.75rem;
    }
  }
`;

export const NoResultsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  h1 {
    font-weight: 500;
  }

  p {
    padding: 1.25rem 0rem;
  }

  img {
    margin: 1.25rem 0rem 3.125rem 0rem;
  }
  
`;
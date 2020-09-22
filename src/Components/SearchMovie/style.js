import styled from 'styled-components';

export const MovieSection = styled.div`
  margin: 0.625rem 0rem 1.875rem 1.875rem;
  transition: all .3s ease;
  cursor: pointer;
  border-radius: 0.5rem;
  padding-bottom: 0.9375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    margin: 0rem;
  }
`;

export const SearchMoviesSection = styled.section`
  display: block;
  margin-left: auto;
  width: 88%;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const MovieStyled = styled.div`
  margin: 1.875rem;
  transition: all .3s ease;
  padding-bottom: 0.625rem;
  border-radius: 0.5rem;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    margin: 1rem .5rem;
  }


  img {
    border-radius: 0.5rem;
    box-shadow: var(--shadow-primary);
    transition: all .3s ease;
    background-size: cover;
    width: 15.625rem;
    height: 23.125rem;

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      width: 9.625rem;
      height: 15.125rem;
    }
  }

  &:hover {
    transform: scale(1.03);
    background: var(--primary);
    color: var(--white);

    div {
      color: var(--white);

      a {
        color: var(--white) important;
      }
    }
  } 
`;

export const MovieTitle = styled.div`
  max-width: 15.625rem;
  margin: 1.25rem auto auto 0;
  text-align: center;
  opacity: .9;
  font-weight: 300;
  font-size: .85rem;
  letter-spacing: 0.0313rem;

  p {
    max-width: 12.5rem;
    margin: 0 auto;

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      max-width: 9.5rem;
     font-size: 0.8rem;
    }
  }
`;

export const CategoryText = styled.div`
  padding-bottom: 1.875rem;
  margin-left: 1.5625rem;
  font-size: 1.3rem;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    font-size: 1rem;
    margin-left: 0rem;
  }

  h1 {
    font-weight: 200;
    letter-spacing: 0.0625rem;
  }

  p {
    font-size: .9rem;
    font-weight: 700;
  }
`;

export const MovieIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.9375rem 0rem;
  color: var(--secondary);
  
  a {
    color: var(--secondary);
  }

  svg {
    margin: 0rem 0.1875rem;
    transform: scale(0.8);
  }
`;

export const MainStyled = styled.main`
  padding: 1.875rem;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    padding: 5.875rem 0rem 1rem 0rem;
  }
`;

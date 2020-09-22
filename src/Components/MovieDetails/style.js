import styled from 'styled-components';

export const MovieIDSection = styled.section`
  padding: 1.875rem;
  width: 90%;
  margin-left: auto;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    width: 100%;
    padding: 0rem;
  }
`;

export const MovieIDAbout = styled.div`
  display: flex;
  justify-content: center;
  margin: 6.25rem auto;
  text-align: left;
  align-items: center;
  flex-wrap: wrap;
`;

export const MovieIDTitle = styled.div`

  h1 {
    font-weight: 300;
    font-size: 2.5rem;
    text-transform: uppercase;
    max-width: 40.5rem;
    
    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      font-size: 1.3rem;
    }
  }

  p {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
    max-width: 37.5rem;

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      font-size: 0.8rem;
    }
  }
`;

export const MovieIDGenres = styled.div`
  margin: 3.125rem 0rem;

   div {
    margin-top: 0.3125rem;
    display: flex;
    flex-wrap: wrap;

    p {
      color: var(--gray);
      text-transform: uppercase;
      font-size: 0.8rem;
      padding: 0rem 1.25rem 0rem 0.125rem;

      @media (min-width:18.75rem) and (max-width: 49.1875rem) {
        font-size: 0.7rem;
      }
    } 
}
`;

export const MovieIDPoster = styled.div`

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    text-align: center;
  }

  img {
    border-radius: 0.5rem;
    width: 80%;
    box-shadow: var(--shadow-secondary);

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      width: 60%;
    }
  }

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    margin-bottom: 2.25rem;
  }
`;

export const MovieIDDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  flex-wrap: wrap;
  padding: 0.625rem 1.875rem;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    padding: 0rem;
  }
`;

export const MovieIDSynopsis = styled.div`
  max-width: 40.625rem;

  p:last-child {
    margin: 0.9375rem 0rem;
    font-weight: 400;
    line-height: 1.5625rem;
    font-size: 0.95rem;
    letter-spacing: -0.0125rem;

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      font-size: 0.9rem;
      max-width: 400px;
    }
  }
`;

export const MovieIDButtons = styled.div`
  display: flex;
  justify-content: center;
  
  button {
    margin: 2.5rem 2.5rem 0rem 0rem;

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      margin: 1.5rem 0rem;
    }
  }
`;

export const MainStyled = styled.main`
  padding: 1.875rem;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    padding: 0rem;
  }
`;

export const MovieIDData = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  margin-top: 1.875rem;
  color: var(--secondary);
  flex-wrap: wrap;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    margin-top: 1rem;
  }

  div {
    display: flex;
    margin: 10px 10px 10px 0px;
  }

  p {
    margin-right: 0.3125rem;
    opacity: 0.3;
    font-size: 0.9rem;
    font-weight: bold;
    

    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      font-size: 0.8rem;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;  
  position: absolute;
  top: 9.375rem;
  right: 30.3125rem;
  opacity: 1;
  font-size: 3rem;
  animation-name: closeButton;
  animation-duration: 2s;
  animation-fill-mode: both;
  position: fixed;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    top: 14rem;
    right: 0.9375rem;
    
  }

  @keyframes CloseButton {
    0% {
      opacity: 0;
    } 100% {
      opacity: 1;
    }
  }
`;
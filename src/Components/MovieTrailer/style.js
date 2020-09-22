import styled from 'styled-components';

export const MoviePlayer = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  iframe {  
    border: none;
    border-radius: 0.3125rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    animation-name: VideoPlayer;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    
    @media (min-width:18.75rem) and (max-width: 49.1875rem) {
      width: 350px;
      height: 230px;
    }
  }

  @keyframes VideoPlayer {
    from {
      bottom: -3.125rem;
      box-shadow: 0rem;
      opacity: 0;
    } to {
      box-shadow: 0.625rem 0.625rem 6.25rem #0000007d;
      bottom: 0rem;
      opacity: 1;
    }
  }
`;


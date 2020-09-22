import styled from 'styled-components';

export const SideBarStyled = styled.div`
  position: fixed;
  display: flex;
  width: 12rem;
  border-right: 0.0625rem solid #37474f26;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  z-index: 99991;
  padding: 0rem 0rem 0rem 3.125rem;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    display: none;
  }

  svg {
    font-size: 0.8rem;
    padding: 0rem 0.625rem;
    color: #263238;  
  }

  ul {
    list-style-type: none;
  }

  li {
    margin: 0.9375rem 0rem;
    opacity: 0.8;
    text-align: left;
  }

  .active {
    border: 0.0625rem solid #546e7a;
    padding: 0.5625rem 5.625rem 0.5625rem 3.4375rem;
    border-radius: 100px;
    margin-left: -2.875rem !important;
    color: #263238;
    opacity: 1;
      
    svg {
      opacity: 1;
    }
  }
`;

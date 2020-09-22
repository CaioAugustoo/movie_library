import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary: #37474F;
  --secondary: #263238;
  --shadow-primary: 0rem 2rem 5rem rgba(0,0,0,0.2);
  --shadow-secondary: 0rem 2rem 6rem rgba(0,0,0,0.3);
  --shadow-input: 1px 1px 20px rgba(0, 0, 0, 0.096);
  --white: #FFFFFF;
  --gray: #546e7a;
  --light-gray: #1F445734;
}


* {
  margin: 0px;
  padding: 0px;
}

body {
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}


button {
  outline: none
}

a {
  text-decoration: none;
  color: var(--secondary);
  font-size: 0.9rem; 
}

.__react_component_tooltip {
  text-align: center;
}
`;

export const Container = styled.div`
  max-width: 1600px;
  padding: 0rem 0.9375rem;
  margin: 0 auto;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    padding: 0rem 1.0625rem;
  }

  @media (max-width: 100rem) {
    padding: 0rem 0.9375rem;
  }
`;

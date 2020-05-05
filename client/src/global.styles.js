import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');


body {
  font-family: 'Montserrat', sans-serif;
  /* padding: 20px 60px; */

  @media screen and (max-width: 768px){
      /* padding: 10px */
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

`;

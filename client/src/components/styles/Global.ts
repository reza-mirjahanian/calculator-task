import {createGlobalStyle} from 'styled-components'

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
};

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

const GlobalStyles = createGlobalStyle`


  * {
    box-sizing: border-box;
  }

  body, html {
    overflow-x: hidden;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #fff;
    color: hsl(191, 85%, 5%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
  }


  a {
    text-decoration: none;
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }


  img {
    max-width: 100%;
  }

  h1 {
    text-align: center;
  }


  @media only screen and ${device.mobileL} {
    body {
      background-color: #ffd97a;
    }

    h1 {
      font-size: 25px;

    }
  }
`


export default GlobalStyles

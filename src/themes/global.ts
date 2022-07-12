import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    min-height: 100vh;
  }

  body, html {
    font: 400 18px 'Montserrat', Roboto, sans-serif;
    overflow-x: hidden ;
    background-color: #1C093D;
    width: 100vw;

    ::-webkit-scrollbar {
      width: 2px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.white};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.white};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.white};
    }

    scrollbar-color: ${(props) => props.theme.colors.white} ${(props) =>
  props.theme.colors.white} ;
    scrollbar-width: thin;
  }

  @media screen and (max-width: 1600px) {
    body, html {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1400px) {
    body, html {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1300px) {
    body, html {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1200px) {
    body, html {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 900px) {
    body, html {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 700px) {
    body, html {
      font-size: 10px;
    }
  } 
  @media screen and (max-width: 460px) {
    body, html {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 350px) {
    body, html {
      font-size: 6px;
    }
  }
`

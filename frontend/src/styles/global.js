import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body, html {
    color: green;
    background: #eee;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
    button {
      color: green;
    }
  }
`

const GlobalStyleContainer = styled.main`
  display: block;
  min-height: 100%;
`

const GlobalTheme = {
  main: "mediumseagreen",
  mainHover: "purple"
};

export {  
  GlobalStyleContainer,
  GlobalStyle,
  GlobalTheme
}

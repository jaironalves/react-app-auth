import styled, { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body, html {
    @import url('https://fonts.googleapis.com/css?family=Roboto');    
    background: #eee;
    font-family: Roboto, sans-serif;    
    height: 100%;
    width: 100%;    
  }  
`
const GlobalTheme = {
  primary: '#ff0198',
  secondary: '#01c1d6',
  //danger: '#eb238e',
  danger: 'green',
  light: '#f4f4f4',
  dark: '#222'
};

export {  
  GlobalStyleContainer,
  GlobalStyle,
  GlobalTheme
}

import styled, { css } from 'styled-components'

const cssDefault = css`
  background: transparent;
  color: ${props => props.theme.primary};
`

const cssPrimary = css`
  background: ${props => props.theme.primary};
  color: white; 
`

const cssDanger = css`
background: red;
color: white;
border: 2px solid red;    
`

const StyledButton = styled.button`    
    font-size: 1em;
    border-radius: 5px;
    padding: 0.25em 1em;
    margin: 0 1em;    
    border: 2px solid ${props => props.theme.primary};    
    
    ${props => 
      (props.primary && cssPrimary) ||
      (props.danger && cssDanger) ||
      cssDefault
      }     
`

export default StyledButton
import styled, { css } from 'styled-components'

//color: ${props => props.theme.main};

const StyledButton = styled.button`
    ${props => props.color && css`
      color: ${props => props.color};      
    `};
    font-size: 16px;
    ${props => props.background && css`
      background-color: ${props => props.background};      
    `};    
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;   
`

export default StyledButton
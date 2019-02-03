import styled from 'styled-components'

const StyledNav = styled.nav`
    color: lightgreen;  
    display: flex;
    height: 50px;    
    background-color: ${props => props.theme.primary};
    align-items: center;
    padding-left: 50px;
`

export default StyledNav
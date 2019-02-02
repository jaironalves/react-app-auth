import styled from 'styled-components'

const StyledA = styled.a`
    color: ${props => props.theme.main};
    &:hover{
        color: ${props => props.theme.mainHover}
    }
`

export default StyledA
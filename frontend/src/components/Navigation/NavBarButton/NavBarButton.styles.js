import styled from 'styled-components'

const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    background-color: transparent;
    color: white;
    height: 100%;
    width: 40px;  
    cursor: pointer;
    svg
    {
        height: 100%;        
    }
    @media (min-width: 726px) {
      display: none;
    }
`

export default Container;
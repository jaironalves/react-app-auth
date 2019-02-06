import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled(Link)`        
    display: flex;   
    align-items: center;         
    height: 100%;
    text-decoration: none;    
    color: white;
    font-weight: bold;
    &:active, :visited {
        text-decoration: none;
    }    
    img {
        height: 100%;   
    }
    span {
        display: inline-flex;
        align-items: center;
        height: 100%;        
        margin-right: 10px;        
        @media (max-width: 400px) {
            display: none;            
        } 
    }
`

export default Container
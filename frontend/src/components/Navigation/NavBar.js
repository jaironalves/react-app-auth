import styled from 'styled-components'
import React, { Component } from 'react'

const NavBarContainer = styled.nav`        
    display: flex;
    align-items: center;
    height: 40px;        
    background-color: ${props => props.theme.primary};    
`
const NavBarHeaderLogo = styled.img`
    height: 100%;
`

const NavBarHeaderText = styled.div`
    
`

const NavBarToggleButtonContainer = styled.div`    
    height: 100%;
    width: 30px;     
    margin: 10px;
    margin-left: auto;    
    button {     
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;        
        background: transparent;
        border: none;
        cursor: pointer; 
        padding: 0;  
        box-sizing: border-box;       
        div {                                     
            width: 30px;
            height: 2px;
            background: white;            
        }
    }
    @media (min-width: 699px) {
        display: none;            
    }
`

const NavBarHeaderToggleButton = props => (
    <NavBarToggleButtonContainer>
        <button>
            <div />
            <div />
            <div />
        </button>
    </NavBarToggleButtonContainer>
)

export {
    NavBarContainer,
    NavBarHeaderLogo,
    NavBarHeaderText,
    NavBarHeaderToggleButton
}
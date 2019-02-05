import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { AccountCircle, Menu } from 'styled-icons/material'

const NavBarContainer = styled.nav`        
    display: flex;
    align-items: center;    
    height: 56px;     
    background-color: ${props => props.theme.primary};    
    padding: 0 10px;  
    border: 1px solid black;    
    @media (max-width: 725px) {
        padding: 0;        
        justify-content: space-between;        
    }
`

const NavBarHeaderLink = styled(Link)`    
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px; 
    text-decoration: none;    
    text-align: center;        
    color: white;   
    font-weight: bold; 
    border: 2px solid yellow;
    &:hover{
        color: gray;
    }     
`

const NavBarHeaderLinkContainer = styled.div`    
    border: 2px solid black;
    display: flex;    
    height: 80%;            
    box-sizing: border-box;
    align-items: center;       
    ${props => (props.right && css`margin-left: auto;`)}
    ${props => (props.desktop && css`
        @media (max-width: 725px) {
            display: none;            
        }        
        `)
    }
`

const NavBarHeaderToggleButton = styled(Menu)`
    flex: 1;
    border: 2px solid purple;
    background-color: transparent;
    color: white; 
    height: 100%;
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    cursor: pointer;       
    @media (min-width: 726px) {
        display: none;            
    }
`

const NavBarAccountCircle = styled(AccountCircle)`
    background-color: transparent;
    color: white; 
    height: 100%;
    width: 40px;  
    cursor: pointer;  
    @media (min-width: 726px) {
        display: none;            
    }   
`

export {
    NavBarContainer,
    NavBarHeaderLogo,
    NavBarHeaderText,
    NavBarHeaderLinkContainer,    
    NavBarHeaderLink,
    NavBarHeaderToggleButton,
    NavBarButtorRounded,
    NavBarAccountCircle,
    NavBarBrandContainer,
    NavBarSpace
}
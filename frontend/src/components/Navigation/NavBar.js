import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { AccountCircle, Menu } from 'styled-icons/material'

const NavBarContainer = styled.nav`        
    display: flex;
    align-items: center;
    height: 40px;     
    background-color: ${props => props.theme.primary};    
    padding: 0 10px;    
`

const NavBarBrandContainer = styled(Link)`
    display: flex;
    height: 100%;
    text-decoration: none;
    align-items: center;
    color: white;
    font-weight: bold;
    &:active {
        text-decoration: none;
    }
    &:visited {
        text-decoration: none;
    }

`

const NavBarHeaderLogo = styled.img`
    height: 100%;    
`

const NavBarHeaderText = styled.div`
    width: 120px;  
    margin-right: 10px; 
`

const NavBarHeaderLink = styled(Link)`    
    width: 100px; 
    text-decoration: none;    
    text-align: center;        
    color: white;   
    font-weight: bold; 
`

const NavBarHeaderLinkContainer = styled.div`    
    border: 2px solid black;
    display: flex;    
    height: 100%;            
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
    background-color: transparent;
    color: white; 
    height: 100%;
    width: 40px;  
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
    NavBarBrandContainer
}
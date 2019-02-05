import React, { Component } from 'react'
import {
    NavBarContainer,
    NavBarHeaderLogo, NavBarHeaderText,
    NavBarHeaderLinkContainer, NavBarHeaderLink,
    NavBarHeaderToggleButton,
    NavBarBrandContainer, NavBarAccountCircle,
    NavBarSpace
} from './NavBar'

import NavBarBrand from './NavBarBrand';

import { AccountCircle } from 'styled-icons/material'

import Logo from '../../assets/logo.png'

/*
<NavBarBrandContainer to="/contato">                        
                        <NavBarHeaderLogo src={Logo}/>                        
                        <NavBarHeaderText>React Aplicação</NavBarHeaderText>    
                    </NavBarBrandContainer>                    
                    */

export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarContainer>                    
                    <NavBarHeaderToggleButton />    
                    <NavBarBrand to="/contato" srcLogo={Logo} text="React App"/>

                    
                    <NavBarHeaderLinkContainer desktop>
                        <NavBarHeaderLink to="/contato">Contato</NavBarHeaderLink>
                        <NavBarHeaderLink to="/sobre">Sobre</NavBarHeaderLink>
                    </NavBarHeaderLinkContainer>

                    <NavBarHeaderLinkContainer right desktop>
                        <NavBarHeaderLink to="/cadastrar">Cadastrar</NavBarHeaderLink>
                        <NavBarHeaderLink to="/login">Login</NavBarHeaderLink>                        
                    </NavBarHeaderLinkContainer>
                    <NavBarAccountCircle />
                </NavBarContainer>
            </React.Fragment>
        )
    }
}

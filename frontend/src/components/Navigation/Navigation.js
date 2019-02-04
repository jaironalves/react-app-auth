import React, { Component } from 'react'
import {
    NavBarContainer,
    NavBarHeaderLogo, NavBarHeaderText,
    NavBarHeaderLinkContainer, NavBarHeaderLink,
    NavBarHeaderToggleButton,
    NavBarBrandContainer, NavBarAccountCircle
} from './NavBar'

import { AccountCircle } from 'styled-icons/material'

import Logo from '../../assets/logo.png'

export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarContainer>
                    <NavBarHeaderToggleButton />
                    <NavBarBrandContainer to="/contato">
                        <NavBarHeaderLogo src={Logo}/>                            
                        <NavBarHeaderText>React Aplicação</NavBarHeaderText>    
                    </NavBarBrandContainer>                    
                    <NavBarHeaderLinkContainer desktop>
                        <NavBarHeaderLink to="/contato">Contato</NavBarHeaderLink>
                        <NavBarHeaderLink to="/sobre">Sobre</NavBarHeaderLink>
                    </NavBarHeaderLinkContainer>

                    <NavBarHeaderLinkContainer right>
                        <NavBarHeaderLink to="/cadastrar">Cadastrar</NavBarHeaderLink>
                        <NavBarHeaderLink to="/login">Login</NavBarHeaderLink>
                        <NavBarAccountCircle />
                    </NavBarHeaderLinkContainer>
                </NavBarContainer>
            </React.Fragment>
        )
    }
}

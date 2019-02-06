import React, { Component } from 'react'
import {
  NavBarContainer,
  NavBarHeaderLinkContainer,
  NavBarHeaderLink,  
  NavBarAccountCircle
} from './NavBar'

import NavBarBrand from './NavBarBrand'
import NavBarButton from './NavBarButton'

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
          <NavBarButton />
          <NavBarBrand to="/contato" srcLogo={Logo} text="React App" />

          <NavBarHeaderLinkContainer desktop="desktop">
            <NavBarHeaderLink to="/contato">Contato</NavBarHeaderLink>
            <NavBarHeaderLink to="/sobre">Sobre</NavBarHeaderLink>
          </NavBarHeaderLinkContainer>

          <NavBarHeaderLinkContainer right="right" desktop="desktop">
            <NavBarHeaderLink to="/cadastrar">Cadastrar</NavBarHeaderLink>
            <NavBarHeaderLink to="/login">Login</NavBarHeaderLink>
          </NavBarHeaderLinkContainer>
          <NavBarAccountCircle />
        </NavBarContainer>
      </React.Fragment>
    )
  }
}

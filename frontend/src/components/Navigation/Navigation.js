import React, { Component } from 'react'
import { NavBarContainer, NavBarHeaderLogo, NavBarHeaderText, NavBarHeaderToggleButton } from './NavBar'

import Logo from '../../assets/logo.png'

export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarContainer>
                    <NavBarHeaderLogo src={Logo} />
                    <NavBarHeaderText> Header Text</NavBarHeaderText>
                    <NavBarHeaderToggleButton/>
                </NavBarContainer>                
            </React.Fragment>
        )
    }
}

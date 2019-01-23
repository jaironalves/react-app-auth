import React, { Component } from 'react'
import Logo from '../../../public/static/images/logo.png'
import Navigation from './MainNavigation'

class MainHeader extends Component {
    render() {
        return (
            <header className="main-header">
                <img src={Logo} height="50" className="main-header-logo" alt="logo" />
                <h1 className="main-header-title">Welcome to React</h1>
                <Navigation />                                
            </header>
        )
    }
}

export default MainHeader

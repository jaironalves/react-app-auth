import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainNavigation extends Component {
    render() {
        return (
            <nav className="nav-bar" role="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Contato">Contato</Link></li>
                </ul>
            </nav>
        )
    }
}

export default MainNavigation
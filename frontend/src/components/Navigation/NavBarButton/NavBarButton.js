import React from 'react'
import Container from './NavBarButton.styles'
import { Menu } from 'styled-icons/material'

const NavBarButton = () => (
    <React.Fragment>
        <Container>
            <button>
                <Menu />
            </button>
        </Container>
    </React.Fragment>
)

export default NavBarButton;
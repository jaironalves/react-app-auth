import React from 'react'
import Container from './styles'

const NavBarBrand = ({ to, srcLogo, text }) => {
    return (
        <React.Fragment>
            <Container to={to}>
                {srcLogo && <img src={srcLogo} />}
                {text && <span>{text}</span>}
            </Container>
        </React.Fragment>
    )
}

export default NavBarBrand
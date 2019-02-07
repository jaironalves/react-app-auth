import React from 'react'
import Container from './styles'
import PropTypes from 'prop-types'

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

NavBarBrand.propTypes = {
    to: PropTypes.string.isRequired,
    srcLogo: PropTypes.string,
    text: PropTypes.string
}

export default NavBarBrand
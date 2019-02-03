import React, { Component } from 'react'
import StyledButton from '../../components/StyledButton'
import Navigation from '../../components/Navigation'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />          
        <h2>Seja bem vindo</h2>
        <StyledButton>Ola mundo</StyledButton>
        <StyledButton primary>Primary</StyledButton>
        <StyledButton danger>Danger</StyledButton>
      </React.Fragment>
    )
  }
}

export default Home;
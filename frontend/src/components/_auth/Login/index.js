import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Logo from '../../../assets/logo.png'

import { Form, Container } from './styles'

export default class Login extends Component {

    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleLogin = e => {
        e.preventDefault();
        alert("Eu vou logar");
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleLogin}>
                    <img src={Logo} alt="React logo" />
                    <input                        
                        type="text"
                        name="usuarionome"
                        placeholder="Nome de usuário"                        
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="usuariosenha"
                        placeholder="Senha"                        
                        onChange={this.handleChange}
                    />
                    <button type="submit">Fazer login</button>
                    <hr />
                    <Link to="/cadastrar">Ainda não é membro?</Link>
                </Form>
            </Container>
        )
    }
}
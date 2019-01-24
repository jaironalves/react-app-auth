import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Logo from '../../assets/logo.png'

import  './style.sass'

export default class Login extends Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">                    
                    <form>
                        <img className="auth-logo" src={Logo} alt="React logo" />
                        <input
                            className="auth-input"
                            name="usuarionome"
                            placeholder="Nome de usuário"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="auth-input"
                            name="usuariosenha"
                            placeholder="Senha"
                            type="password"
                            onChange={this.handleChange}
                        />                        
                        <input className="auth-fazer" type="submit" value = "Fazer login" />
                        <hr className="auth-separacao" />                        
                        <Link className="auth-link" to="/cadastrar">Ainda não é membro?</Link>
                    </form>
                </div>
            </div>
        )
    }
}
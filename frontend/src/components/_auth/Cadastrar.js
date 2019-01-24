import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Logo from '../../assets/logo.png'

import './style.sass'

export default class Login extends Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)        
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        if (!username || !email || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            await api.post("/users", { username, email, password });
            this.props.history.push("/");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
          }
        }
      }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <form onSubmit={this.handleSubmit}>
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
                            name="usuarioemail"
                            placeholder="Endereço de e-mail"
                            type="email"
                            onChange={this.handleChange}
                        />
                        <input
                            className="auth-input"
                            name="usuariosenha"
                            placeholder="Senha"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input className="auth-fazer" type="submit" value="Cadastrar grátis" />
                        <hr className="auth-separacao" />
                        <Link className="auth-link" to="/login">Fazer login</Link>
                    </form>
                </div>
            </div>
        )
    }
}
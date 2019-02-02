import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Logo from '../../assets/logo.png'

import { Form, Container } from './styles'

export default class Cadastrar extends Component {

    state = {
        usuarionome: "",
        usuarioemail: "",
        usuariosenha: "",
        erro: ""
      };

    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleCadastrar =  async e => {
        e.preventDefault();

        const { usuarionome, usuarioemail, usuariosenha } = this.state;

        if (!usuarionome || !usuarioemail || !usuariosenha) {
            this.setState({ erro: "Preencha todos os dados para se cadastrar" });
        }
        else {
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
            <Container>
                <Form onSubmit={this.handleCadastrar}>
                    <img src={Logo} alt="React logo" />
                    {this.state.erro && <p>{this.state.erro}</p>}
                    <input
                        type="text"
                        name="usuarionome"
                        placeholder="Nome de usuário"
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="usuarioemail"
                        placeholder="Endereço de e-mail"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="usuariosenha"
                        placeholder="Senha"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Cadastrar grátis</button>
                    <hr />
                    <Link to="/login">Fazer login</Link>
                </Form>
            </Container>
        )
    }
}
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { isAuthenticated } from './services/auth'

import Login from './pages/Login'
import Cadastrar from './pages/Cadastrar/'
import Home from './pages/Home'

import PrivateRoute from './components/PrivateRoute'

import { GlobalStyleContainer, GlobalStyle, GlobalTheme } from './styles/global'

const Routes = () => (
    <ThemeProvider theme={GlobalTheme}>
        <GlobalStyleContainer>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/cadastrar" component={Cadastrar} />
                    <PrivateRoute path="/app" component={() => <h1>App</h1>} isAuthenticated={isAuthenticated} />
                    <Route path="*" component={() => <h1>Page not found</h1>} />
                </Switch>
            </BrowserRouter>
        </GlobalStyleContainer>
    </ThemeProvider>

)

export default Routes
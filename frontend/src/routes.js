import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import { PrivateRoute, Login, Cadastrar } from './components/_auth'

import {GlobalStyle, GlobalStyleContainer} from './styles/global'

const Routes = () => (
    <BrowserRouter>
        <GlobalStyleContainer>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={() => <h1>Home</h1>} />
                <Route path="/login" component={Login} />
                <Route path="/cadastrar" component={Cadastrar} />
                <PrivateRoute path="/app" component={() => <h1>App</h1>} isAuthenticated={isAuthenticated} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </GlobalStyleContainer>
    </BrowserRouter>
)

export default Routes
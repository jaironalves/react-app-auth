import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import Login from './components/_auth/Login'
import Cadastrar from './components/_auth/Cadastrar'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ?
                (<Component {...props} />) :
                (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
        } />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Home</h1>} />
            <Route path="/login" component={Login} />
            <Route path="/cadastrar" component={Cadastrar} />
            <PrivateRoute path="/app" component={() => <h1>App</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes
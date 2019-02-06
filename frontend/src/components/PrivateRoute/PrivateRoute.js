import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element, PropTypes.func
  ]).isRequired,
  isAuthenticated: PropTypes.func.isRequired,
  location: PropTypes.object
}

export default PrivateRoute

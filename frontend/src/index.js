import React from 'react'
import { render as ReactDOMRender } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'
import App from './App'

import './styles/style.sass'

const renderApp = (NextApp) => {
    ReactDOMRender(
        <BrowserRouter>
            <AppContainer>
                <NextApp />
            </AppContainer>
        </BrowserRouter>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        renderApp(NextApp)
    })

}
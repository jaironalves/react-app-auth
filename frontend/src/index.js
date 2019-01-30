import React from 'react'
import { render as ReactDOMRender } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const renderApp = (NextApp) => {
    ReactDOMRender(
            <AppContainer>
                <NextApp />
            </AppContainer>,        
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
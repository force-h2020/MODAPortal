import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import configureStore from './store'


const store = configureStore(window.__INITIAL_STATE__)


ReactDOM.render(<App store={store}/> , document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
  })
}
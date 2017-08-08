/* eslint-disable global-require */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './modules/App/App'
import LoginContainer from './modules/Auth/LoginContainer'
import ModaListPage from './modules/Moda/pages/ModaListPage/ModaListPage'
import ModaDetailPage from './modules/Moda/pages/ModaDetailPage/ModaDetailPage'


export const createRoutes = (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { auth: { authenticated } } = store.getState()
    if (!authenticated) {
      // Takes a Location object
      // https://github.com/mjackson/history/blob/master/docs/Location.md
      replace({
        pathname: "/login",
        state: { nextPathname: nextState.location.pathname }
      })
    }
    callback()
  }

  return(
  <Route path="/" component={App}>
    <IndexRoute component={ModaListPage} />
    <Route path="/modas/:slug-:cuid" component={ModaDetailPage} />
    <Route path="login" component={LoginContainer} />
  </Route>
  )
}

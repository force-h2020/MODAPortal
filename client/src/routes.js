import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App/App'
import LoginContainer from './Auth/LoginContainer'
import ModaListPage from './Moda/pages/ModaListPage'
import ModaDetailPage from './Moda/pages/ModaDetailPage'


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
  <Route path="/" component={App} >
    <IndexRoute component={ModaListPage} onEnter={requireAuth} />
    <Route path="/modas/:slug-:cuid" component={ModaDetailPage} onEnter={requireAuth} />
    <Route path="login" component={LoginContainer} />
  </Route>
  )
}

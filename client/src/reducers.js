import { combineReducers } from 'redux'
//import { routerReducer } from "react-router-redux"

import app from './modules/App/AppReducer'
import modas from './modules/Moda/ModaReducer'
import auth from './modules/Auth/AuthReducer'

export default combineReducers({
  app,
  modas,
  auth,
  //routing: routerReducer
})

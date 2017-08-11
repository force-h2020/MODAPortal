import { combineReducers } from 'redux'
//import { routerReducer } from "react-router-redux"

import app from './App/AppReducer'
import modas from './Moda/ModaReducer'
import auth from './Auth/AuthReducer'

export default combineReducers({
  app,
  modas,
  auth,
  //routing: routerReducer
})

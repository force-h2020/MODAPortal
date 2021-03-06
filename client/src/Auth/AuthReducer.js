import {REHYDRATE} from 'redux-persist/constants'
import { 
  MANUAL_LOGIN_USER,
  LOGIN_SUCCESS_USER,
  LOGIN_ERROR_USER,
  SIGNUP_USER,
  SIGNUP_SUCCESS_USER,
  SIGNUP_ERROR_USER,
  LOGOUT_USER,
  LOGOUT_SUCCESS_USER,
  LOGOUT_ERROR_USER,
  REGISTER_USER,
  REGISTER_SUCCESS_USER,
  REGISTER_ERROR_USER 
} from "./constants"

const user = (state = {
  isWaiting: false,
  authenticated: false,
  rememberMe: false
}, action) => {
  switch(action.type) {
    case REHYDRATE:
      let incoming = action.payload.auth
      if (incoming !== undefined && incoming.rememberMe)
      {
        return Object.assign({}, state, incoming)
      }
      else
      {
        return state
      }
    case MANUAL_LOGIN_USER:
      return Object.assign({}, state, { isWaiting: true })
    case LOGIN_SUCCESS_USER:
      return Object.assign({}, state, { isWaiting: false,
                                        authenticated: true,
                                        rememberMe: action.data.rememberMe,
                                        user: action.data.user})
    case LOGIN_ERROR_USER:
      return Object.assign({}, state, { isWaiting: false, authenticated: false })
    case SIGNUP_USER:
      return Object.assign({}, state, { isWaiting: true })
    case SIGNUP_SUCCESS_USER:
      return Object.assign({}, state, { isWaiting: false, authenticated: true })
    case SIGNUP_ERROR_USER:
      return Object.assign({}, state, { isWaiting: false, authenticated: false })
    case LOGOUT_USER:
      return Object.assign({}, state, { isWaiting: true })
    case LOGOUT_SUCCESS_USER:
      delete state.user
      return Object.assign({}, state, { isWaiting: false, authenticated: false })
    case LOGOUT_ERROR_USER:
      return Object.assign({}, state, { isWaiting: false, authenticated: true })
    case REGISTER_USER:
      return Object.assign({}, state, { isWaiting: true })
    case REGISTER_SUCCESS_USER:
      return Object.assign({}, state, { isWaiting: false })
    case REGISTER_ERROR_USER:
      return Object.assign({}, state, { isWaiting: false })
    default:
      return state
  }
}

export default user

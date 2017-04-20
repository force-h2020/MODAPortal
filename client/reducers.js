/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
//import posts from './modules/Post/PostReducer';
import modas from './modules/Moda/ModaReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  //posts,
  modas,
  intl,
});

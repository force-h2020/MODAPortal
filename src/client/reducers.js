import { combineReducers } from 'redux';

import app from './modules/App/AppReducer';
import modas from './modules/Moda/ModaReducer';
import intl from './modules/Intl/IntlReducer';

export default combineReducers({
  app,
  modas,
  intl,
});

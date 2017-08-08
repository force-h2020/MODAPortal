import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { createRoutes } from './routes';

require('./main.css');

export default function App(props) {
  const rts = createRoutes(props.store)
  return (
    <Provider store={props.store}>
      <Router key={Math.random()} history={browserHistory} routes={rts} />
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

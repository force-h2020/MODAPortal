import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { PropTypes } from 'prop-types';

import styles from './App.css';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import * as appActions from "./AppActions"
import * as authActions from '../Auth/AuthActions'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="MODA Portal"
            titleTemplate="%s - FORCE"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            toggleAddModa={this.props.toggleAddModa}
            hideForms={this.props.hideForms}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  toggleAddModa: PropTypes.func.isRequired,
  hideForms: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  Object.assign(appActions, authActions)
)(App);

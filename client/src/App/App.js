import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import './App.css'
import DevTools from './components/DevTools'
import Header from './components/Header'
import Footer from './components/Footer'
import AlertDismissable from './alert'
import * as appActions from "./AppActions"
import * as authActions from '../Auth/AuthActions'

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
// See: https://github.com/facebookincubator/create-react-app/issues/614
window.jQuery = $
require('bootstrap')


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false,
                   showModal: false}
    this.close = this.close.bind(this)
  }

  componentDidMount() {
    this.setState({isMounted: true})
  }

  close() {
    this.setState({ showModal: false })
  }

  render() {

    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
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
              content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
          ]}
        >
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/spacelab/bootstrap.min.css" />
        </Helmet>
        <Header
          toggleAddModa={this.props.toggleAddModa}
          hideForms={this.props.hideForms}
          logout={this.props.manualLogout}
          authenticated={this.props.authenticated}
          user={this.props.user}
        />
        <div className='container'>
          <div className="row">
            <div className="col">
              { this.state.showModal && (<AlertDismissable />) }
            </div>
            <div className="row">
              <div className="col">
              {this.props.children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  toggleAddModa: PropTypes.func.isRequired,
  hideForms: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  displayName: PropTypes.string
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user
  }
}

export default connect(
  mapStateToProps,
  Object.assign(appActions, authActions)
)(App)

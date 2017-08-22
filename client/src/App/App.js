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
import { Grid, Row } from 'react-bootstrap'

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
                content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
              },
            ]}
          />
          <Header
            toggleAddModa={this.props.toggleAddModa}
            hideForms={this.props.hideForms}
          />
          <Grid>
            <Row>
              { this.state.showModal && (<AlertDismissable />) }
            </Row>
              {this.props.children}
          </Grid>
          <Footer />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  toggleAddModa: PropTypes.func.isRequired,
  hideForms: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  Object.assign(appActions, authActions)
)(App)

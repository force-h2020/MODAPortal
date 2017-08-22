import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { persistStore } from 'redux-persist'

import './main.css'
import { createRoutes } from './routes'


/*
Read more: 
- https://github.com/rt2zz/redux-persist/blob/master/docs/recipes.md#delay-render-until-rehydration-complete
- https://github.com/rt2zz/redux-persist/issues/226
*/
export default class AppProvider extends Component {

  constructor(props) {
    super(props)
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(this.props.store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
  	const rts = createRoutes(this.props.store)
    if(!this.state.rehydrated){
      return <div>Loading...</div>
    }
    return (
     <Provider store={this.props.store}>
      <Router key={Math.random()} history={browserHistory} routes={rts} />
    </Provider>
   )
  }
}

AppProvider.propTypes = {
  store: PropTypes.object.isRequired,
}

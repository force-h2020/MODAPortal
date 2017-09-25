import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router'

import './Header.css'
import logo from './emmc-x250.png'


export default class extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  static propTypes = {
    toggleAddModa: PropTypes.func.isRequired,
    hideForms: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    user: PropTypes.object,
    navActions: PropTypes.array
  }

  render() {
    const actions = (
      <li className="dropdown">
        <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions<span className="caret"></span></a>
        <ul className="dropdown-menu">
          {/*this.context.router.isActive('/', true)? <li><a onClick={this.props.toggleAddModa}>New MODA</a></li>: null*/}
          {(this.props.navActions && !this.props.navActions.empty)? this.props.navActions.map(action => {return <li key={action.key}><a onClick={action.actionHandler}>{action.actionName}</a></li>}): null}

          {/*<li role="separator" className="divider"></li>
        <li><a onClick={this.props.logout}>Logout</a></li>*/}
        </ul>
      </li>)
    return (
      <nav className="navbar navbar-default affix" style={{background: 'aliceblue', width: '100%', zIndex: '99'}}>
        <div className="container">

          <div className="navbar-header">
            <Link to="/" onClick={this.props.hideForms}>
              <img src={logo} alt='Brand' className='brand-logo' />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav">
              <li><Link to="/" onClick={this.props.hideForms}>(preview version)</Link></li>
              { (this.props.navActions && this.props.navActions.length)? actions: null}
              {/* this.context.router.isActive('/', true)? <li><button type="button" className="btn btn-default navbar-btn" onClick={this.props.toggleAddModa}>New</button></li>: null */}
            </ul>

            <ul className="nav navbar-nav navbar-right">
              { this.props.authenticated? <li><p className='navbar-text'>Signed in as {this.props.user.displayname}</p></li>: null }
              { this.context.router.isActive('/login', true)? null: <li><button type="button" className="btn btn-default navbar-btn" onClick={this.props.logout}>Logout</button></li> }
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}

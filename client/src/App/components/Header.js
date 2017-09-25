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
    user: PropTypes.object
  }

  render() {
    // const actions = (
    //   <li className="dropdown">
    //     <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions<span className="caret"></span></a>
    //     <ul className="dropdown-menu">
    //       <li><a onClick={this.props.toggleAddModa}>New MODA</a></li>
          
    //       {/*<li role="separator" className="divider"></li>
    //     <li><a onClick={this.props.logout}>Logout</a></li>*/}
    //     </ul>
    //   </li>)

    return (
      <nav className="navbar navbar-default" style={{background: 'aliceblue'}}>
        <div className="container">

          <div className="navbar-header">
            <Link to="/" onClick={this.props.hideForms}>
              <img src={logo} alt='Brand' className='brand-logo' />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav">
              <li><Link to="/" onClick={this.props.hideForms}>(preview version)</Link></li>
              { this.context.router.isActive('/', true)? <li><button type="button" className="btn btn-default navbar-btn" onClick={this.props.toggleAddModa}>New</button></li>: null }
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
/*        <div className='content'>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>

          <h1 className='site-title'>
            <img src={logo} alt='logo' className='site-logo' />
            <Link to="/" onClick={this.props.hideForms}>MODA Portal</Link>
            <span className='site-subtitle'> (preview version)</span>
          </h1>

          {
            this.context.router.isActive('/', true)
              ? <button className='add-post-button' onClick={this.props.toggleAddModa}>Add MODA</button>
              : null
          }

          {
            this.context.router.isActive('/login', true)
              ? null
              : <button className='add-post-button' onClick={this.props.logout}>Logout</button>
          }

          {
            this.props.authenticated ? <span className='user-info'> Logged in as {this.props.user.displayname}</span> : null
          }

        </div>*/

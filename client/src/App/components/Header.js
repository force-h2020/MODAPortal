import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router'

import './Header.css'
import logo from './emmc-x250.png'


export function Header(props, context) {
  return (
    <div className='header'>
      <div className='content'>
        <h1 className='site-title'>
          <img src={logo} alt='logo' className='site-logo' />
          <Link to="/" onClick={props.hideForms}>MODA Portal</Link>
          <span className='site-subtitle'> (preview version)</span>
        </h1>
          {
            context.router.isActive('/', true)
              ? <button className='add-post-button' onClick={props.toggleAddModa}>Add MODA</button>
              : null
          }
          {
            context.router.isActive('/login', true)
              ? null
              : <button className='add-post-button' onClick={props.logout}>Logout</button>
          }
      </div>
    </div>
  )
}

Header.contextTypes = {
  router: PropTypes.object,
}

Header.propTypes = {
  toggleAddModa: PropTypes.func.isRequired,
  hideForms: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  user: PropTypes.object
}

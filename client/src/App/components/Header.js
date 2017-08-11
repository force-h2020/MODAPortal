import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router'

import './Header.css'
import logo from './emmc-x250.png'


export function Header(props, context) {
  return (
    <div className='header'>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
      <div className='content'>
        <h1 className='site-title'>
          <img src={logo} alt='logo' className='site-logo' />
          <span>
            <Link to="/" onClick={props.hideForms}>MODA Portal</Link>
            <span className='site-subtitle'> (preview version)</span>
          </span>
        </h1>
        {
          context.router.isActive('/', true)
            ? <button className='add-post-button' onClick={props.toggleAddModa}>Add MODA</button>
            : null
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
}

export default Header

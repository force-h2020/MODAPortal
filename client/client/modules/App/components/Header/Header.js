import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

import styles from './Header.css';
import logo from '../../emmc-x250.png';


export function Header(props, context) {
  return (
    <div className={styles.header}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <script src="//cdn.polyfill.io/v2/polyfill.min.js" />
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <img src={logo} alt={"logo"} className={styles['site-logo']} />
          <span>
            <Link to="/" onClick={props.hideForms}>MODA Portal</Link>
            <span className={styles['site-subtitle']}> (preview version)</span>
          </span>
        </h1>
        {
          context.router.isActive('/', true)
            ? <button className={styles['add-post-button']} onClick={props.toggleAddModa}>Add MODA</button>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddModa: PropTypes.func.isRequired,
  hideForms: PropTypes.func.isRequired,
};

export default Header;

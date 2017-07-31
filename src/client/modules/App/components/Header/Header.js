import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Header.css';
import logo from '../../emmc-x250.png';


export function Header(props, context) {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );

  return (
    <div className={styles.header}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <script src="//cdn.polyfill.io/v2/polyfill.min.js" />
      {/*
        <div className={styles['language-switcher']}>
          <ul>
            <li><FormattedMessage id="switchLanguage" /></li>
            {languageNodes}
          </ul>
        </div>
    */}
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <img src={logo} alt={"logo"} className={styles['site-logo']} />
          <span>
            <Link to="/" onClick={props.hideForms}><FormattedMessage id="siteTitle" /></Link>
            <span className={styles['site-subtitle']}><FormattedMessage id="siteSubTitle" /></span>
          </span>
        </h1>
        {
          context.router.isActive('/', true)
            ? <button className={styles['add-post-button']} onClick={props.toggleAddModa}><FormattedMessage id="addModa" /></button>
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
  switchLanguage: PropTypes.func.isRequired,
  hideForms: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;

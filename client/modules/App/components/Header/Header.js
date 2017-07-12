import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';
import logo from '../../emmc-x250.png';

export function Header(props, context) {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );

  return (
    <div className={styles.header}>
      <link rel="stylesheet" id="theme" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
      <script src="//cdn.polyfill.io/v2/polyfill.min.js"></script>
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
          <img src={logo} alt={"logo"} className={styles['site-logo']}/>
          <span>
            <Link to="/" onClick={props.hideForms}><FormattedMessage id="siteTitle"/></Link>
            <span className={styles['site-subtitle']}><FormattedMessage id="siteSubTitle"/></span>
          </span>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddModa}><FormattedMessage id="addModa" /></a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  toggleAddModa: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;

import React from 'react';
import styles from './Footer.css';
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; European Materials Modelling council CSA (EMMC-CSA)</p>
      <p>The EMMC-CSA project receives funding European Union&apos;s H2020 Programme grant agreement n° 723867</p>
    </div>
  );
}

export default Footer;

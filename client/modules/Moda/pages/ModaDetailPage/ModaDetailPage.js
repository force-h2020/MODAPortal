import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/ModaListItem/ModaListItem.css';

// Import Actions
import { fetchModa } from '../../ModaActions';

// Import Selectors
import { getModa } from '../../ModaReducer';

export function ModaDetailPage(props) {
  return (
    <div>
      <Helmet title={props.moda.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.moda.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.moda.name}</p>
        <p className={styles['post-desc']}>{props.moda.content}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
ModaDetailPage.need = [params => {
  return fetchModa(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    moda: getModa(state, props.params.cuid),
  };
}

ModaDetailPage.propTypes = {
  moda: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ModaDetailPage);

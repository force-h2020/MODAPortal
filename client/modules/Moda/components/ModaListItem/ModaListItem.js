// import React from 'react';
// import { PropTypes } from 'prop-types';
// import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

// // Import Style
// import styles from './ModaListItem.css';

// function ModaListItem(props) {
//   return (
//     <div className={styles['single-post']}>
//       <h3 className={styles['post-title']}>
//         <Link to={`/modas/${props.moda.slug}-${props.moda.cuid}`} >
//           {props.moda.title}
//         </Link>
//       </h3>
//       <p className={styles['author-name']}><FormattedMessage id="by" /> {props.moda.name}</p>
//       <p className={styles['post-desc']}>{props.moda.content}</p>
//       <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteModa" /></a></p>
//       <hr className={styles.divider} />
//     </div>
//   );
// }

// ModaListItem.propTypes = {
//   moda: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   }).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default ModaListItem;

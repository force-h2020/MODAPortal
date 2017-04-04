import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Moda.css';


class ModaItem extends React.Component {
  render() {
    return (
       <li className={"list-group-item"}>{this.props.moda.userCase}</li>
    );
  }
}

export default withStyles(s)(ModaItem);
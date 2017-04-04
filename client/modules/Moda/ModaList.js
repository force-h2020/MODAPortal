import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Moda.css';
import ModaItem from './ModaItem'
import uuid from 'uuid';

class ModaList extends React.Component {
  render() {
    let modaItems;
    if (this.props.modas) {
      modaItems = this.props.modas.map (moda => {
        return (
            <ModaItem key={uuid.v4()} moda={moda} />
          );
      })
    }
    
    return (
      <div className={"panel panel-default"}>
        <div className={"panel-heading"}>
          Panel heading
        </div>
        <div className={"panel-body"}>
          <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </div>
        <ul className={"list-group"}>
          {modaItems}
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(ModaList);
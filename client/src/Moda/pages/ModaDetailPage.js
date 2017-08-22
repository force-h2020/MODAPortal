import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget';
import { fetchModa, updateModaRequest } from '../ModaActions';


class ModaDetailPage extends Component {
  handleUpdateModa = moda => {
    this.props.dispatch(updateModaRequest(moda))
    //updateModaRequest(moda)(this.props.dispatch)
    this.context.router.push('/')
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.moda.title} />
        <div>
          <ModaCreateWidget addModa={this.handleUpdateModa} showAddModa moda={this.props.moda} />
        </div>
      </div>
    );
  }
}

ModaDetailPage.need = [params => {
  return fetchModa(params.cuid);
}];

function mapStateToProps(state, props) {
  return {
    moda: state.modas.data.filter(moda => moda.cuid === props.params.cuid)[0],
    type: true,
  };
}

ModaDetailPage.propTypes = {
  moda: PropTypes.shape({
    userCase: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

ModaDetailPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(ModaDetailPage);

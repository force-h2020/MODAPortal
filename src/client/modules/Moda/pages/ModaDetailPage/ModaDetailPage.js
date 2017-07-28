import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import ModaCreateWidget from '../../components/ModaCreateWidget/ModaCreateWidget';

// Import Actions
import { fetchModa, updateModaRequest } from '../../ModaActions';

// Import Selectors
import { getModa } from '../../ModaReducer';

class ModaDetailPage extends Component {
  handleUpdateModa = moda => {
    this.props.dispatch(updateModaRequest({ moda }));
    this.context.router.push('/');
  };

  render() {
    return (
      <div>
        <Helmet title={this.props.moda.userCase} />
        <div>
          <ModaCreateWidget addModa={this.handleUpdateModa} showAddModa moda={this.props.moda} />
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ModaDetailPage.need = [params => {
  return fetchModa(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    moda: getModa(state, props.params.cuid),
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

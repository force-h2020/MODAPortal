import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import ModaCreateWidget from '../../components/ModaCreateWidget/ModaCreateWidget';

// Import Style
import styles from '../../components/ModaListItem/ModaListItem.css';

// Import Actions
import { fetchModa, updateModaRequest } from '../../ModaActions';
import { toggleAddModa } from '../../../App/AppActions';

// Import Selectors
import { getModa } from '../../ModaReducer';

class ModaDetailPage extends Component {
//  componentDidMount() {
//    this.props.dispatch(fetchModa());
//  }

  handleUpdateModa = moda => {
    //this.props.dispatch(toggleAddModa());
    this.props.dispatch(updateModaRequest({ moda }));
  };

  render() {
    return (
      <div>
        <Helmet title={this.props.moda.userCase} />
        <div>
          <ModaCreateWidget addModa={this.handleUpdateModa} showAddModa={true} moda={this.props.moda} />
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
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ModaDetailPage);

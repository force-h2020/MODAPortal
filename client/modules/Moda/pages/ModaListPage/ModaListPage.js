import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import ModaList from '../../components/ModaList';
import ModaCreateWidget from '../../components/ModaCreateWidget/ModaCreateWidget';

// Import Actions
import { addModaRequest, fetchModas, deleteModaRequest } from '../../ModaActions';
import { toggleAddModa } from '../../../App/AppActions';

// Import Selectors
import { getShowAddModa } from '../../../App/AppReducer';
import { getModas } from '../../ModaReducer';

class ModaListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchModas());
  }

  handleDeleteModa = moda => {
    if (confirm('Do you want to delete this moda')) { // eslint-disable-line
      this.props.dispatch(deleteModaRequest(moda));
    }
  };

  handleAddModa = (name, title, content) => {
    this.props.dispatch(toggleAddModa());
    this.props.dispatch(addModaRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <ModaCreateWidget addModa={this.handleAddModa} showAddModa={this.props.showAddModa} />
        <ModaList handleDeleteModa={this.handleDeleteModa} modas={this.props.modas} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ModaListPage.need = [() => { return fetchModas(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddModa: getShowAddModa(state),
    modas: getModas(state),
  };
}

ModaListPage.propTypes = {
  modas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddModa: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ModaListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ModaListPage);
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import ModaList from '../components/ModaList';
import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget';
import ModaSearchWidget from '../components/ModaSearchWidget'
import { addModaRequest, fetchModas, deleteModaRequest } from '../ModaActions';
import { toggleAddModa } from '../../App/AppActions';


class ModaListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchModas());
  }

  handleDeleteModa = cuid => {
    if (confirm('Do you want to delete moda ' + cuid + '?')) { // eslint-disable-line
      this.props.dispatch(deleteModaRequest(cuid))
    }
  }

  handleAddModa = moda => {
    this.props.dispatch(toggleAddModa())
    this.props.dispatch(addModaRequest({ moda }))
  }

  handleSearchModa = query => {
    if (query !== null && query !== undefined && query !== '') {
      this.props.dispatch(fetchModas({ query }))
    } else {
      this.props.dispatch(fetchModas())
    }
  }

  render() {
    return (
      <div>
        <ModaCreateWidget addModa={this.handleAddModa} showAddModa={this.props.showAddModa} />
        <ModaSearchWidget searchModa={this.handleSearchModa} />
        <ModaList handleDeleteModa={this.handleDeleteModa} modas={this.props.modas} />
      </div>
    );
  }
}

ModaListPage.need = [() => { return fetchModas(); }];

function mapStateToProps(state) {
  return {
    showAddModa: state.app.showAddModa,
    modas: state.modas.data,
  };
}

ModaListPage.propTypes = {
  modas: PropTypes.arrayOf(PropTypes.shape({
    userCase: PropTypes.string.isRequired,
  })).isRequired,
  showAddModa: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ModaListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(ModaListPage);

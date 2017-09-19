import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet'

import ModaList from '../components/ModaList';
import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget';
import ModaSearchWidget from '../components/ModaSearchWidget'
import { addModaRequest, fetchModas, deleteModaRequest, updateNewModaDraft } from '../ModaActions';
import { toggleAddModa } from '../../App/AppActions';


class ModaListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddModa: null,
      modas: null,
      draft: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showAddModa: nextProps.showAddModa,
      modas: nextProps.modas,
      draft: nextProps.draft
    })
  }

  componentDidMount() {
    this.props.dispatch(fetchModas());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.modas !== this.state.modas || nextProps.showAddModa !== this.state.showAddModa)
  }

  handleDeleteModa = cuid => {
    if (confirm('Do you want to delete moda ' + cuid + '?')) { // eslint-disable-line
      this.props.dispatch(deleteModaRequest(cuid))
    }
  }

  handleAddModa = moda => {
    this.props.dispatch(addModaRequest({ moda })).then(()=> {this.props.dispatch(toggleAddModa())})
    
  }

  handleSearchModa = query => {
    if (query !== null && query !== undefined && query !== '') {
      this.props.dispatch(fetchModas({ query }))
    } else {
      this.props.dispatch(fetchModas())
    }
  }

  handleChange = rjsfData => {
    let moda = rjsfData.formData
    this.props.dispatch(updateNewModaDraft(moda))
  }

  render() {
    const display = this.props.showAddModa? {display: 'block'} : {display: 'none'}
    return (
      <div className='row'>
        <div className='col'>
          <Helmet title='MODA' />
          <div style={display}>
            <ModaCreateWidget addModa={this.handleAddModa} onChange={this.handleChange} moda={this.props.draft} />
          </div>
          <br />
          <ModaSearchWidget searchModa={this.handleSearchModa} />
          <ModaList handleDeleteModa={this.handleDeleteModa} modas={this.props.modas} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    showAddModa: state.app.showAddModa,
    modas: state.modas.data,
    draft: state.modas.draft
  };
}

ModaListPage.propTypes = {
  modas: PropTypes.arrayOf(PropTypes.shape({
    userCase: PropTypes.string.isRequired,
  })).isRequired,
  showAddModa: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  draft: PropTypes.object
};

ModaListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(ModaListPage);

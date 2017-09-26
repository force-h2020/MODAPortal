import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'

import ModaList from '../components/ModaList';
import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget';
import ModaSearchWidget from '../components/ModaSearchWidget'
import { addModaRequest, fetchModas, deleteModaRequest, updateNewModaDraft } from '../ModaActions';
import { toggleAddModa } from '../../App/AppActions';
import * as types from '../../App/constants'


const mainDocs = `
MODA Portal is a tool to collect MODA documents. In this portal one can currently carry on the followings:

- Create a new MODA
- See change history of a MODA
- Delete a MODA

MODA Portal uses [emmc.info](https://emmc.info) for user management. Administrator users will see other user's submissions.`

const docsNode = (
  <div className="panel panel-info">
    <div className="panel-heading">
     <h3 className="panel-title">Welcome to MODA Portal!</h3>
    </div>
    <div className="panel-body">
      <ReactMarkdown id='mainDocs' source={mainDocs} />
    </div>
  </div>)

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
    this.props.dispatch({
      type: types.NAVBAR_ACTIONS,
      payload: [{
        key: 'new',
        actionName: 'New',
        actionHandler: () => { this.props.dispatch(toggleAddModa()) }
      }],
    })
    this.props.dispatch(fetchModas())
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: types.RESET_NAVBAR,
    })
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
          {docsNode}
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

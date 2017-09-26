import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget'
import { fetchModa, updateModaRequest } from '../ModaActions'
import { WorkflowDiagram } from '../components/WorkflowDiagram'
import * as types from '../../App/constants'


class ModaDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      draftModa: null
    }
  }

  componentWillMount() {
    if (!this.props.readonly) {
      this.props.dispatch({
        type: types.NAVBAR_ACTIONS,
        payload: [{
          key: 'save',
          actionName: 'Save',
          actionHandler: () => {
            this.handleSaveModa(this.state.draftModa)
          }
        }],
      })
    }
    this.props.dispatch(fetchModa(this.props.params.cuid))
  }

  handleSaveModa = moda => {
    if (moda)
      this.props.dispatch(updateModaRequest(moda)).then(()=> {console.log('update dispatched')})
  }

  handleUpdateModa = moda => {
    if (!this.props.readonly) {
      this.props.dispatch(updateModaRequest(moda)).then(() => this.context.router.push('/'))
    }
  }

  handleChange = data => {
    this.setState({draftModa: data.formData})
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('nextProps ', nextProps)
    //console.log('currentState ', this.state)
    //console.log('nextState ', nextState)
    // If there is a moda being edited take it
    return !(nextState && nextState.draftModa)
  }

  render() {
    if(!this.props.moda){
      return <div>Loading...</div>
    }
    return (
      <div className='row'>
        <div className='col'>
          <Helmet title={this.props.moda.title} />
          <ModaCreateWidget
            addModa={this.handleUpdateModa}
            onChange={this.handleChange}
            moda={this.props.moda}
            readonly={this.props.readonly}
            showAddModa
          />
          <WorkflowDiagram moda={this.props.moda} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  var moda = {userCase: '', slug:'', cuid:'', readonly: false}
  if (state.modas.data.length > 0) {
    moda = state.modas.data.filter(moda => moda.cuid === props.params.cuid)[0]
  }
  return {
    moda: moda,
    readonly: props.location && props.location.state && props.location.state.readonly
  }
}

ModaDetailPage.propTypes = {
  moda: PropTypes.shape({
    userCase: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  readonly: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

ModaDetailPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(
  mapStateToProps
)(ModaDetailPage)

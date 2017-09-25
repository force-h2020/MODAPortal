import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget'
import { fetchModa, updateModaRequest } from '../ModaActions'
import { WorkflowDiagram } from '../components/WorkflowDiagram'
import * as types from '../../App/constants'

class ModaDetailPage extends Component {
  componentWillMount() {
    if (!this.props.readonly) {
      this.props.dispatch({
        type: types.NAVBAR_ACTIONS,
        payload: [{
          key: 'save',
          actionName: 'Save',
          actionHandler: () => { console.log('save moda ' + this.props.moda.cuid) }
        }],
      })
    }
    this.props.dispatch(fetchModa(this.props.params.cuid))
  }

  handleUpdateModa = moda => {
    if (!this.props.readonly) {
      this.props.dispatch(updateModaRequest(moda)).then(() => this.context.router.push('/'))
    }
  }

  render() {
    if(!this.props.moda){
      return <div>Loading...</div>
    }
    return (
      <div>
        <Helmet title={this.props.moda.title} />
        <ModaCreateWidget addModa={this.handleUpdateModa} showAddModa moda={this.props.moda} readonly={this.props.readonly}/>
        <WorkflowDiagram moda={this.props.moda} />
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

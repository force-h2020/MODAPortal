import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget'
import { fetchModa, updateModaRequest } from '../ModaActions'


class ModaDetailPage extends Component {
  componentWillMount() {
    this.props.dispatch(fetchModa(this.props.params.cuid))
  }

  handleUpdateModa = moda => {
    this.props.dispatch(updateModaRequest(moda))
    this.context.router.push('/')
  }

  render() {
    if(!this.props.moda){
      return <div>Loading...</div>
    }
    return (
      <div>
        <Helmet title={this.props.moda.title} />
        <div>
          <ModaCreateWidget addModa={this.handleUpdateModa} showAddModa moda={this.props.moda} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  var moda = {userCase: '', slug:'', cuid:''}
  if (state.modas.data.length > 0) {
    moda = state.modas.data.filter(moda => moda.cuid === props.params.cuid)[0]
  }
  return {
    moda: moda,
  }
}

ModaDetailPage.propTypes = {
  moda: PropTypes.shape({
    userCase: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

ModaDetailPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(
  mapStateToProps
)(ModaDetailPage)

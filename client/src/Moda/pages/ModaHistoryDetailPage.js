import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import ModaCreateWidget from '../components/ModaCreateWidget/ModaCreateWidget'
import { fetchModa, fetchModaHistory } from '../ModaActions'


class ModaHistoryDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchModa(this.props.params.cuid)).then(() => this.props.dispatch(fetchModaHistory(this.props.params.cuid)))
  }

  render() {
    if( !this.props.moda /* || !this.props.moda.history */) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Helmet title={this.props.moda.title} />
        <div>
          <ModaCreateWidget moda={this.props.moda} readonly/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  var moda = {userCase: '', slug: '', cuid: '', history: {versions: []}}
  if (state.modas.data.length > 0) {
    moda = state.modas.data.filter(moda => moda.cuid === props.params.cuid)[0]
    if (moda && moda.history && moda.history.versions && moda.history.versions.length > 0) {
      return { moda: moda.history.versions[props.params.hid]}
    }
  }
  return {moda: moda}
}

ModaHistoryDetailPage.propTypes = {
  moda: PropTypes.shape({
    userCase: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

ModaHistoryDetailPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(
  mapStateToProps
)(ModaHistoryDetailPage)

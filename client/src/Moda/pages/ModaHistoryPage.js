import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import ModaHistoryList from '../components/ModaHistoryList'
import { fetchModa, fetchModaHistory } from '../ModaActions'


class ModaHistoryPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchModa(this.props.params.cuid)).then(() => this.props.dispatch(fetchModaHistory(this.props.params.cuid)))
  }

  render() {
    if(!this.props.history){
      return <div>Loading...</div>
    }
    return (
      <div>
        <ModaHistoryList history={this.props.history} moda={this.props.moda} />
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  const moda = state.modas.data.filter(moda => moda.cuid === props.params.cuid)[0]
  return {
    history: moda && moda.history,
    moda: moda
  }
}

ModaHistoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

ModaHistoryPage.contextTypes = {
  router: PropTypes.object,
}

export default connect(mapStateToProps)(ModaHistoryPage)

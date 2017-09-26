import React from 'react'
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

import { resetMessage } from '../AppActions'
import AlertDismissable from '../alert'

class AppAlert extends React.Component {

  static propTypes = {
    alertStyle: PropTypes.string,
    alertTitle: PropTypes.string,
    alertText: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    alertStyle: 'alert-info',
    alertTitle: '',
    alertText: '',
  }

  handleDismiss = () => {
    this.props.dispatch(resetMessage())
  }

  render() {
    return (
      <AlertDismissable 
        msg={this.props.alertText}
        title={this.props.alertTitle}
        alertStyle={this.props.alertStyle}
        onDismiss={this.handleDismiss}
        visible
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.app.message?
    {
      alertStyle: state.app.message.style,
      alertTitle: state.app.message.title,
      alertText: state.app.message.text,
    }
    :null
}

export default connect(
  mapStateToProps
)(AppAlert)

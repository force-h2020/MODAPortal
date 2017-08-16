import React from 'react'
import { PropTypes } from 'prop-types'
import { Alert } from 'react-bootstrap'


class AlertDismissable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alertVisible: true,
    }
  }

  componentWillReceiveProps(props) {
    if(props.visible) {
      this.setState({
        alertVisible: props.visible
      })
    }
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.props.bsStyle || 'info'} onDismiss={this.handleAlertDismiss}>
          <h4>{ this.props.title || 'Something went wrong'}</h4>
          <p>{ this.props.msg || 'No message is provided for this error.'}</p>
        </Alert>
      )
    }
    return null
  }

  handleAlertDismiss = () => {
    this.setState({alertVisible: false})
  }

  handleAlertShow = () => {
    this.setState({alertVisible: true})
  }
}

AlertDismissable.propTypes = {
  visible: PropTypes.bool,
}

AlertDismissable.defaultProps = {
  visible: false
}

export default AlertDismissable
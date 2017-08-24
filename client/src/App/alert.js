import React from 'react'
import { PropTypes } from 'prop-types'


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
        <div className={"alert alert-dismissible show " + this.props.alertStyle} role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>{ this.props.title || 'Holy guacamole!' }</strong> { this.props.msg || 'You should check in on some of those fields below.'}
        </div>
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
  alertStyle: PropTypes.string
}

AlertDismissable.defaultProps = {
  visible: false,
  alertStyle: 'alert-info'
}

export default AlertDismissable
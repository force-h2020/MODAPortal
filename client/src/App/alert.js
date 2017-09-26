import { connect } from "react-redux"
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
          <button type="button" className="close" data-hide="alert" aria-label="Close" onClick={this.handleAlertDismiss}>
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>{ this.props.title || 'Holy guacamole!' }</strong> { this.props.msg || 'You should check in on some of those fields below.'}
        </div>
      )
    }
    return null
  }

  handleAlertDismiss = () => {
    if(this.props.onDismiss)
      this.props.onDismiss()
    else 
      this.setState({alertVisible: false})
  }

  handleAlertShow = () => {
    this.setState({alertVisible: true})
  }
}

AlertDismissable.propTypes = {
  visible: PropTypes.bool,
  alertStyle: PropTypes.string,
  onDismiss: PropTypes.func
}

AlertDismissable.defaultProps = {
  visible: false,
  alertStyle: 'alert-info',
}

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
// The second argument "ownProps" contains props passed to the component
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
  }

}
export default connect(
  mapStateToProps
)(AlertDismissable)

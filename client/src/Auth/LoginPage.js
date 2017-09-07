import React from 'react'

import AlertDismissable from '../App/alert'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      loginMessage: '',
      loginFailed: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const username = this.username.value
    const password = this.password.value
    const rememberMe = this.rememberMe.checked
    // Passed in via react-redux. Returns a promise.
    this.props.manualLogin({ // this function is passed in via react-redux
      username,
      password,
      rememberMe
    }, this.props.nextPathname) // holds the path to redirect to after login (if any)
    .then((loginMessage) => {
      if (loginMessage) {
        // report to the user is there was a problem during login
        this.setState({
          loginMessage: loginMessage,
          loginFailed: true
        })      
      }
    })
  }

  handleChange = event => {
    // const target = event.target
    // const value = target.type === 'checkbox' ? target.checked : target.value
    // const name = target.name
    //console.log(target, value, name)
  }

  render() {
    return(
      <div>
        { this.state.loginFailed && <AlertDismissable msg={this.state.loginMessage} title='Login failed' alertStyle='alert-danger' visible={true}/>}
        
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">EMMC Login</h3>
          </div>
          <div className="panel-body">
            Use your <a href="https://emmc.info">EMMC</a> account to login to MODA Portal or send us a <a href="https://emmc.info/join">join request</a>.
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-body">


            <form onSubmit={ this.handleSubmit } onChange={ this.handleChange }>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input ref={ref => { this.username = ref }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">{"We'll never share your email with anyone else."}</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input ref={ref => { this.password = ref }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input ref={ref => { this.rememberMe = ref }} type="checkbox" className="form-check-input" />
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>  
          <div className="panel-footer">European Materials Modelling Council </div>
        </div>
      </div>
    )
  }
}

export default Login

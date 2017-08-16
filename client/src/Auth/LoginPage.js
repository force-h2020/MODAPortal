import React from 'react'
import { Form, Button, FormControl, FormGroup, Col, Checkbox, ControlLabel, HelpBlock } from 'react-bootstrap'

import AlertDismissable from '../App/alert'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      loginMessage: '',
      loginFailed: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const username = this.username.value
    const password = this.password.value
    // Passed in via react-redux. Returns a promise.
    this.props.manualLogin({ // this function is passed in via react-redux
      username,
      password
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

  handleChange = value => {
  }

  render() {
    return(
      <div>
        { this.state.loginFailed && <AlertDismissable msg={this.state.loginMessage} title='Login failed' bsStyle='danger' visible={true}/>}
        <Form horizontal onSubmit={ (e)=> this.handleSubmit(e) } onChange={ this.handleChange }>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl inputRef={ref => { this.username = ref }} type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl inputRef={ref => { this.password = ref }} type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
              <ControlLabel></ControlLabel>
              <FormControl.Feedback />
              <HelpBlock></HelpBlock>
            </Col>
          </FormGroup>
        </Form>
      </div>  
    )
  }
}

export default Login

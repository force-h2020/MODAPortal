import React from "react"
import { Form, Button, FormControl, FormGroup, Col, Checkbox, ControlLabel, HelpBlock } from 'react-bootstrap'


const loginMessageStyle = {
  color: "red"
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      loginMessage: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const email = this.email.value
    const password = this.password.value

    // Passed in via react-redux. Returns a promise.
    this.props.manualLogin({ // this function is passed in via react-redux
      email,
      password      
    }, this.props.nextPathname) // holds the path to redirect to after login (if any)
    .then((loginMessage) => {
      if (loginMessage) {
        // report to the user is there was a problem during login
        this.setState({
          loginMessage
        })      
      } 
    })
  }

  handleChange = value => {
  }

  render() {
    return(
      <div>
        <Form horizontal onSubmit={ (e)=> this.handleSubmit(e) } onChange={ this.handleChange }>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl inputRef={ref => { this.email = ref; }} type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl inputRef={ref => { this.password = ref; }} type="password" placeholder="Password" />
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
              <div style={loginMessageStyle}>{ this.state.loginMessage }</div>
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

import React from 'react'
import { PropTypes } from 'prop-types'

import { Button, Panel, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class ModaSearchWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  static propTypes = {
    searchModa: PropTypes.func.isRequired,
    query: PropTypes.string
  }

  static contextTypes = {
  }

  static defaultProps = {
    searchModa: () => {},
    query: ''
  }

  render() {
    return (
      <Panel>
        <FieldGroup
          id="formControlsText"
          type="text"
          label=""
          placeholder="Enter search terms"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <Button bsStyle="primary" onClick={this.handleSearch}>
          Search
        </Button>
      </Panel>
    )
  }

  handleChange = event => {
    this.setState({query: event.target.value})
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.doSearch(this.state.query)
    }
  }

  handleSearch = event => {
    this.doSearch(this.state.query)
  }

  doSearch = query => {
    this.props.searchModa(query)
  }
}

export default ModaSearchWidget
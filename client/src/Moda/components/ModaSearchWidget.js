import React from 'react'
import { PropTypes } from 'prop-types'


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
      <div className='panel'>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder='Enter search terms' aria-label="Search for..." 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}

              />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button" onClick={this.handleSearch}>Search</button>
              </span>
            </div>
          </div>
        </div>
      </div>
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
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Moda.css';
import ModaForm from './ModaForm'
import ModaList from './ModaList'

class Moda extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modas: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target});
    console.log(event.formData);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.refs.modaList);
    //event.preventDefault();
  }

  componentWillMount() {
    this.setState({modas: [{
        userCase: 'This is a user case',
      },{
        userCase: 'This is another user case',
      }]
    });
  }

  handleAddModa(moda) {
    console.log(moda);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <div className={'panel-body'}>
              <ModaList
                ref={'modaList'}
                modas={this.state.modas}
              />
            </div>
            <ModaForm addModa={this.handleAddModa.bind(this)} title={this.props.title}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Moda);
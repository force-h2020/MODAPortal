import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Moda.css';
import Form from 'react-jsonschema-form';
import schema from './ModaSchema';

const log = type => console.log.bind(console, type);

function CustomFieldTemplate(props) {
  
  const { id, classNames, label, help, required, description, errors, children } = props;
  if (classNames.search('panel') > 0) {
    return (
      <div className={classNames}>
        <div className={'panel-heading'}>
          <h6 className={'panel-title'} htmlFor={id}>{label}{required ? '*' : null}</h6>
          {description}
        </div>
        <div className={'panel-body'}>
          {children}
        </div>
        <div className={'panel-footer'}>
          {errors}
          {help}
        </div>
      </div>
    );
  }
  else { 
    return (
      <div className={classNames}>
        <label htmlFor={id}>{label}{required ? '*' : null}</label>
        {description}
        {children}
        {errors}
        {help}
      </div>
    );
  }
}

/* Using this I have to stop tiles from being rendered,
   because we already show them in panels.
 */
const CustomTitleField = ({title, required}) => {
  const legend = required ? title + '*' : title;
  return <div id="custom">{/*legend*/}</div>;
};

const fields = {
  TitleField: CustomTitleField
};


class ModaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newModa: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target});
    console.log(event.formData);
  }

  handleSubmit(event) {
    console.log(event.formData);
    return false;
    alert('A name was submitted: ' + event.formData);//this.refs.modaForm.state.formData);
    console.log(this.refs.modaForm);
    this.setState({
      newModa: this.refs.modaForm.formData
    }, function () {
      this.props.addModa(this.state.newModa);
    });
    return false;
  }

  static propTypes = {
    //title: PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.setState({formData: {
      userCase: 'This is a sample case',
    }});
  }

  render() {
    const formStyle = {
      userCaseAspects: {
        backgroundColor: 'lightorange',
      },
    };
    CustomFieldTemplate.defaultProps = {
      displayLabel: false
    };
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={'panel panel-default'}>
            <div className={'panel-heading'}>
              <h1 className={'panel-title'}>{this.props.title}</h1>
            </div>
            <div className={'panel-body'}>
              <Form
                ref={'modaForm'}
                style={formStyle}
                schema={schema.schema}
                uiSchema={schema.uiSchema}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onError={log('errors')}
                formData={this.state.newModa}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ModaForm);
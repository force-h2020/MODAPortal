import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Form from 'react-jsonschema-form';
import schema from '../../ModaSchema';

// Import Style
import styles from './ModaCreateWidget.css';

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

export class ModaCreateWidget extends Component {
  addModa = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addModa(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

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
      //newModa: this.refs.modaForm.formData
    }, function () {
      //this.props.addModa(this.state.newModa);
    });
    return false;
  }

/*
  componentWillMount() {
    this.setState({formData: {
      userCase: 'This is a sample case',
    }});
  }
*/

  render() {
    const formStyle = {
      userCaseAspects: {
        backgroundColor: 'lightorange',
      },
    };
    const cls = `${styles.form} ${(this.props.showAddModa ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
              <Form
                ref={'modaForm'}
                style={formStyle}
                schema={schema.schema}
                uiSchema={schema.uiSchema}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onError={log('errors')}
              />
{/*
          <h2 className={styles['form-title']}><FormattedMessage id="createNewModa" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.modaTitle} className={styles['form-field']} ref="title" />
          <textarea placeholder={this.props.intl.messages.modaContent} className={styles['form-field']} ref="content" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addModa}><FormattedMessage id="submit" /></a>
*/}
        </div>
      </div>
    );
  }
}

ModaCreateWidget.propTypes = {
  addModa: PropTypes.func.isRequired,
  showAddModa: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ModaCreateWidget);

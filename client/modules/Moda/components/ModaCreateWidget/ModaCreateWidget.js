import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import Form from 'react-jsonschema-form';
import schema from '../../ModaSchema';
import cudsSchema from '../../CudsSelect';

import styles from './ModaCreateWidget.css';

import { TreeSelect, TreeNode } from 'antd';
import 'antd/dist/antd.css';


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


const treeData = cudsSchema.cudsSchema;

const CUDSTreeSelect = (props) => {
  return (
    <TreeSelect
      style={{ width: 442 }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      value={props.value}
      required={props.required}
      onChange={(value, node, extra) => props.onChange(value)} />
  );
};

const widgets = {
  //TitleField: CustomTitleField,
  'cudstreeselect': CUDSTreeSelect
};

export class ModaCreateWidget extends Component {
  addModa = (event) => {
      this.props.addModa(event.formData);
  };

  handleChange(event) {
    //this.setState({value: event.target});
    console.log(event.formData);
  }

  handleSubmit(event) {
    this.props.addModa(event.formData);
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
                onSubmit={this.addModa}
                onError={log('errors')}
                widgets={widgets}
                formData={this.props.moda}
              />
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

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import Form from 'react-jsonschema-form';
import schema from '../../ModaSchema';
import cudsSchema from '../../CudsSelect';

import styles from './ModaCreateWidget.css';

import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';

/*
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
*/

const treeData = cudsSchema.cudsSchema;

const CUDSTreeSelect = (props) => {
  const onChange = props.onChange;
  return (
    <TreeSelect
      style={{ width: 442 }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      value={props.value}
      required={props.required}
      onChange={(value) => onChange(value)}
    />
  );
};

CUDSTreeSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
};

export class ModaCreateWidget extends Component {
  handleSubmit = (event) => {
    this.props.addModa(event.formData);
  };

  render() {
    const formStyle = {
      userCaseAspects: {
        backgroundColor: 'lightorange',
      },
    };
    // const log = type => console.log.bind(console, type);
    const cls = `${styles.form} ${(this.props.showAddModa ? styles.appear : '')}`;
    const widgets = {
      // TitleField: CustomTitleField,
      cudstreeselect: CUDSTreeSelect,
    };

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <Form
            ref={'modaForm'}
            style={formStyle}
            schema={schema.schema}
            uiSchema={schema.uiSchema}
            onSubmit={this.handleSubmit}
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
  moda: PropTypes.object,
};

export default injectIntl(ModaCreateWidget);

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import Form from 'react-jsonschema-form';
import schema from '../../ModaSchema';
import cudsSchema from '../../CudsSelect';

import styles from './ModaCreateWidget.css';
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';

import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";

const CustomSchemaField = function(props) {
  return (
    <div className={styles[props.name]}>
      <SchemaField {...props}/>
    </div>
  );
};

function CustomFieldTemplate(props) {
  const { id, classNames, label, help, required, description, errors, children } = props;
  console.log(props);
  return (
    <div className={classNames}>
    <div className={styles[props.name]}>
      <label htmlFor={id} title={props.rawDescription}>{label}{required ? '*' : null}</label>
      </div>
      {children}
      {errors}
      {help}
    </div>
  );
}

function ArrayFieldTemplate(props) {
  return (
    <div className={props.className}>

      {props.items &&
        props.items.map(element => (
          <div key={element.index}>
            <div>{element.children}</div>
            {element.hasMoveDown &&
              <button
                onClick={element.onReorderClick(
                  element.index,
                  element.index + 1
                )}>
                Down
              </button>}
            {element.hasMoveUp &&
              <button
                onClick={element.onReorderClick(
                  element.index,
                  element.index - 1
                )}>
                Up
              </button>}
            <button onClick={element.onDropIndexClick(element.index)} className={"btn btn-danger"}>
              Delete
            </button>
            <hr />
          </div>
        ))}

      {props.canAdd &&
        <div className="row">
          <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
            <button onClick={props.onAddClick} type="button" className={"btn btn-info"}>Add +</button>
          </p>
        </div>}

    </div>
  );
}

const CustomTitleField = (props) => {
  const { id, title, required } = props;
  const legend = required ? title + '***' : title;
  return <legend id={id} >{legend}</legend>;
};

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
    // const log = type => console.log.bind(console, type);
    const cls = `${styles.form} ${(this.props.showAddModa ? styles.appear : '')}`;
    const widgets = {
      cudstreeselect: CUDSTreeSelect,
    };

    const fields = {
      SchemaField: CustomSchemaField,
    };

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <Form
            ref={'modaForm'}
            schema={schema.schema}
            uiSchema={schema.uiSchema}
            onSubmit={this.handleSubmit}
            widgets={widgets}
            formData={this.props.moda}
            fields={fields}
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

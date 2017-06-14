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
const MathJax = require('../react-mathjax');


function AddButton({ onClick, disabled }) {
  return (
    <div className="row">
      <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
        <IconBtn
          type="info"
          icon="plus"
          className="btn-add col-xs-12"
          tabIndex="0"
          onClick={onClick}
          disabled={disabled}
        />
      </p>
    </div>
  );
}

function IconBtn(props) {
  const { type = "default", icon, className, ...otherProps } = props;
  return (
    <button
      type="button"
      className={`btn btn-${type} ${className}`}
      {...otherProps}>
      <i className={`glyphicon glyphicon-${icon}`} />
    </button>
  );
}

function ArrayFieldTitle({ TitleField, idSchema, title, required }) {
  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  const id = `${idSchema.$id}__title`;
  return <TitleField id={id} title={title} required={required} />;
}

// Used in the two templates
function DefaultArrayItem(props) {
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold",
  };
  return (
    <div key={props.index} className={props.className}>
      {props.hasToolbar &&
        <div className="array-item-toolbox" style={{margin: '0 auto',width: '25%',marginRight: '0', paddingRight: '10px'}}>
          <div
            className="btn-group"
            style={{ display: "flex", justifyContent: "space-around" }}>

            {(props.hasMoveUp || props.hasMoveDown) &&
              <IconBtn
                icon="arrow-up"
                className="array-item-move-up"
                tabIndex="-1"
                style={btnStyle}
                disabled={props.disabled || props.readonly || !props.hasMoveUp}
                onClick={props.onReorderClick(props.index, props.index - 1)}
              />}

            {(props.hasMoveUp || props.hasMoveDown) &&
              <IconBtn
                icon="arrow-down"
                className="array-item-move-down"
                tabIndex="-1"
                style={btnStyle}
                disabled={
                  props.disabled || props.readonly || !props.hasMoveDown
                }
                onClick={props.onReorderClick(props.index, props.index + 1)}
              />}

            {props.hasRemove &&
              <IconBtn
                type="danger"
                icon="remove"
                className="array-item-remove"
                tabIndex="-1"
                style={btnStyle}
                disabled={props.disabled || props.readonly}
                onClick={props.onDropIndexClick(props.index)}
              />}
          </div>
        </div>}
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
          {props.children}
        </div>
    </div>
  );
}


function ArrayFieldTemplate(props) {
  return (
    <fieldset className={props.className}>

      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.title}
        required={props.required}
      />

      {props.schema.description &&
        <div
          className="field-description"
          key={`field-description-${props.idSchema.$id}`}>
          {props.schema.description}
        </div>}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}>
        {props.items && props.items.map(DefaultArrayItem)}
      </div>

      {props.canAdd &&
        <AddButton
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />}
    </fieldset>
  );
}

const CustomSchemaField = function(props) {
  return (
    <div className={styles[props.name]}>
      <SchemaField {...props}/>
    </div>
  );
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

class MathJaxWidget extends Component {
  render () {
    const { id, classNames, label, help, required, description, errors, children } = this.props;
    const options = {
      showProcessingMessages: true,
      showMathMenu: true,
      tex2jax: { inlineMath: [['$','$'],['\\(','\\)']] },
      jax: ["input/MathML","input/TeX","input/AsciiMath","output/CommonHTML"],
      extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "a11y/accessibility-menu.js"],
      MathML: {
        extensions: ["mml3.js", "content-mathml.js"]
      }
    };

    return (
      <div>
        <textarea className={styles['form-field']}
          value={this.props.value}
          required={this.props.required}
          onChange={(event) => this.props.onChange(event.target.value)} />
        {children}
        {errors}
        {help}
        <MathJax.Context className={styles['form-field']}
                         options={options}>
            <p>
              <MathJax.Node className={styles['form-field']}>
                {this.props.value || ""}
              </MathJax.Node>
            </p>
        </MathJax.Context>
      </div>
    );
  }
}

export class ModaCreateWidget extends Component {
  handleSubmit = (event) => {
    this.props.addModa(event.formData);
  };

  render() {
    // const log = type => console.log.bind(console, type);
    const cls = `${styles.form} ${(this.props.showAddModa ? styles.appear : '')}`;
    const widgets = {
      cudstreeselect: CUDSTreeSelect,
      mathjax: MathJaxWidget
    };

    const fields = {
      SchemaField: CustomSchemaField,
      ArrayFieldTemplate: ArrayFieldTemplate
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

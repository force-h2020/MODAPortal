import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { injectIntl } from 'react-intl';

import Form from 'react-jsonschema-form';
import schema from '../../ModaSchema';
import uiSchema from '../../ModaUISchema';
import cudsSchema from '../../CudsSelect';
import ArrayFieldTemplate from './ArrayFieldTemplate';
import styles from './ModaCreateWidget.css';
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';

const MathJax = require('../react-mathjax');

const CUDSTreeSelect = (props) => {
  const onChange = props.onChange;
  return (
    <TreeSelect
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      treeData={cudsSchema.cudsSchema}
      placeholder="Please select"
      treeDefaultExpandAll
      value={props.value}
      required={props.required}
      onChange={(value) => onChange(value)}
    />
  );
};
CUDSTreeSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
};

const MathJaxWidget = (props) => {
  const { id, classNames, help, required, errors, children, onChange, value } = props;
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
      <textarea
        className={classNames}
        id={id}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
      {children}
      {errors}
      {help}
      <MathJax.Context
        className={styles['form-field']}
        options={options}
      >
        <p>
          <MathJax.Node className={styles['form-field']}>
            {value || "<math></math>"}
          </MathJax.Node>
        </p>
      </MathJax.Context>
    </div>
  );
}

const AutoFilledTitle = function(props) {
  return (
    <div style={{ fontSize: '2.0em' }}>
      {props.formData} <input name={props.name} type="hidden" value={props.formData} />
    </div>
  );
};

const CustomEnum = (props) => {
  return (
    <select id={props.id} className="form-control" value={props.value} required={props.required} onChange={(event) => props.onChange(event.target.value)}>
      {props.options.enumOptions.map((element) => <option value={element.value} key={element.value}>{element.label}</option>)}
    </select>
  );
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
      mathjax: MathJaxWidget,
      CustomEnum: CustomEnum
    };

    const fields = {
      autoFilledTitle: AutoFilledTitle,
    };

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <Form
            ref={'modaForm'}
            schema={schema.schema}
            uiSchema={uiSchema.uiSchema}
            onSubmit={this.handleSubmit}
            widgets={widgets}
            formData={this.props.moda}
            fields={fields}
            ArrayFieldTemplate={ArrayFieldTemplate}
          />
        </div>
      </div>
    );
  }
}

ModaCreateWidget.propTypes = {
  addModa: PropTypes.func.isRequired,
  showAddModa: PropTypes.bool.isRequired,
  moda: PropTypes.object,
};

export default injectIntl(ModaCreateWidget);

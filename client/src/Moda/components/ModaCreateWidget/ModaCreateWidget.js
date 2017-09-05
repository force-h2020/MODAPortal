import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Form from 'react-jsonschema-form';

import schema from '../../ModaSchema';
import uiSchema from '../../ModaUISchema';
import ArrayFieldTemplate from './ArrayFieldTemplate';
import './ModaCreateWidget.css';
import {
  CUDSTreeSelect,
  MathJaxWidget,
  CustomEnum,
  CustomSchemaField,
  AutoFilledTitle,
  MarkdownDescriptionField
} from './FormControls'


export class ModaCreateWidget extends Component {
  handleSubmit = (event) => {
    this.props.addModa(event.formData);
  };

  render() {
    const widgets = {
      cudstreeselect: CUDSTreeSelect,
      mathjax: MathJaxWidget,
      CustomEnum: CustomEnum,
    };

    const fields = {
      SchemaField: CustomSchemaField,
      autoFilledTitle: AutoFilledTitle,
      DescriptionField: MarkdownDescriptionField
    };

    uiSchema.uiSchema['ui:readonly'] = this.props.readonly

    const submitVisible = this.props.readonly? {display: 'none'} : {display: ''}

    return (
        <div className='form-content'>
          <Form
            ref={'modaForm'}
            schema={schema.schema}
            uiSchema={uiSchema.uiSchema}
            onSubmit={this.handleSubmit}
            widgets={widgets}
            formData={this.props.moda}
            fields={fields}
            ArrayFieldTemplate={ArrayFieldTemplate}
          >
          <div>
            <button type="submit" className="btn btn-info" style={submitVisible}>Submit</button>
          </div>
          </Form>
        </div>
    );
  }
}

ModaCreateWidget.propTypes = {
  addModa: PropTypes.func,
  moda: PropTypes.object,
  readonly: PropTypes.bool
};

export default ModaCreateWidget

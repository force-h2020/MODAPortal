import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Form from 'react-jsonschema-form';

import schema from '../../schema/ModaSchema';
import uiSchema from '../../schema/ModaViewUISchema';
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


const CustomTextareaWidget = function(props) {
  return (
    <p>
      {props.value}
    </p>
  )
}

const CustomStringField = function(props) {
  return (
    <p>
    {props.formData}
    </p>)
}

export default class ModaViewWidget extends Component {

  static propTypes = {
    moda: PropTypes.object,
  }

  render() {
    const widgets = {
      cudstreeselect: CUDSTreeSelect,
      mathjax: MathJaxWidget,
      CustomEnum: CustomEnum,
      TextareaWidget: CustomTextareaWidget,

    }

    const fields = {
      SchemaField: CustomSchemaField,
      autoFilledTitle: AutoFilledTitle,
      DescriptionField: MarkdownDescriptionField,
      //StringField: CustomStringField
    }

    uiSchema.uiSchema['ui:readonly'] = true

    return (
        <div className='form-content'>
          <Form
            ref={'modaForm'}
            schema={schema.schema}
            uiSchema={uiSchema.uiSchema}
            widgets={widgets}
            formData={this.props.moda}
            fields={fields}
            ArrayFieldTemplate={ArrayFieldTemplate}
          />
        </div>
    )
  }
}

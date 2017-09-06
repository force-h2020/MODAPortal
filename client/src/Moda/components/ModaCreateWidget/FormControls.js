import React from 'react'
import { PropTypes } from 'prop-types'

import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField"
import cudsSchema from '../../CudsSelect'
import MathJax from '../react-mathjax'
import ReactMarkdown from 'react-markdown'
import TreeSelect from 'antd/lib/tree-select'
import 'antd/lib/tree-select/style/index.css'
import 'antd/lib/select/style/index.css'


const CustomSchemaField = function(props) {
  return (
    <div className={props.name}>
      <SchemaField {...props} />
    </div>
  )
}

const CUDSTreeSelect = (props) => {
  return (
    <TreeSelect
      name='cudsTree'
      style={{width: '100%'}}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      treeData={cudsSchema.cudsSchema}
      placeholder="Please select"
      treeDefaultExpandAll
      value={props.value}
      required={props.required}
      onChange={(value) => props.onChange(value)}
    />
  )
}

CUDSTreeSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
}

CUDSTreeSelect.defaultProps = {
  value: '',
  required: false,
}

const MathJaxWidget = (props) => {
  const { id, help, required, errors, children, onChange, value } = props
  const options = {
    showProcessingMessages: true,
    showMathMenu: true,
    tex2jax: { inlineMath: [['$','$'],['\\(','\\)']] },
    jax: ["input/MathML","input/TeX","input/AsciiMath","output/CommonHTML"],
    extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "a11y/accessibility-menu.js"],
    MathML: {
      extensions: ["mml3.js", "content-mathml.js"]
    }
  }

  const display = props.readonly? {'display': 'none'} : {}

  return (
    <div>
      <textarea
        style={display}
        className='form-field'
        id={id}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
      {children}
      {errors}
      {help}
      <MathJax.Context
        className={'form-field'}
        options={options}
      >
        <p>
          <MathJax.Node className={'form-field'}>
            {value || "<math></math>"}
          </MathJax.Node>
        </p>
      </MathJax.Context>
    </div>
  )
}

const AutoFilledTitle = function(props) {
  return (
    <div style={{ fontSize: '2.0em' }}>
      {props.formData} <input name={props.name} type="hidden" value={props.formData} />
    </div>
  )
}

const CustomEnum = (props) => {
  return (
    <select id={props.id} className="form-control" value={props.value} required={props.required} onChange={(event) => props.onChange(event.target.value)}>
      {props.options.enumOptions.map((element) => <option value={element.value} key={element.value}>{element.label}</option>)}
    </select>
  )
}

const MarkdownDescriptionField = ({id, description}) => {
  description = description || ''
  return (
    <ReactMarkdown
      id={id}
      source={description}
    />)
}


const CustomTitleField = ({id, title, required, ...args}) => {
  const legend = required ? title + '*' : title
  return (
    <div id="custom">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <legend id={id}>{legend}</legend>
      </a>
    </div>)
}

export {
  CustomTitleField,
  CUDSTreeSelect,
  MathJaxWidget,
  CustomEnum,
  CustomSchemaField,
  AutoFilledTitle,
  MarkdownDescriptionField
}
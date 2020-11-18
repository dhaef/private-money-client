import React from 'react'
import PropTypes from 'prop-types'
import { TextEdit } from 'components/TextEdit'
import { DatePicker } from 'components/DatePicker'
import {
  transactionFields as tFields,
  transactionFieldNames
} from 'features/transactions'

// eslint-disable-next-line
import { green, redf, purple } from 'logger'
import * as R from 'ramda'

export const TextEditOrDatePicker = ({
  disabled = false,
  errorLevel,
  field,
  initialValue,
  maxWidth,
  minChars,
  name,
  onChange,
  onBlur,
  placeholder
}) => {

  if (R.type(onChange) !== 'Function') {
    green(`TextEditInput (${name}): onChange`, onChange)
  }

  if (field === tFields.date.name) {
    
    return (
      <DatePicker
        disabled={disabled}
        initialValue={initialValue}
        maxWidth={maxWidth}
        minChars={minChars}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        errorLevel={errorLevel}
      />
    )
  }
  return (
    <TextEdit
      disabled={disabled}
      errorLevel={errorLevel}
      initialValue={initialValue}
      maxWidth={maxWidth}
      minChars={minChars}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

TextEditOrDatePicker.propTypes = {
  disabled: PropTypes.bool,
  errorLevel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }),
  field: PropTypes.oneOf(transactionFieldNames),
  initialValue: PropTypes.any,
  maxWidth: PropTypes.number,
  minChars: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}
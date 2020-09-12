import React, { useState } from 'react'
import { /*useSelector,*/ useDispatch } from 'react-redux'
import {
  operators,
  transactionFields as fields,
} from 'globalConstants'
// import { mergeRight } from 'ramda'
import Button from 'components/Button'
import Select from 'components/Select'
import TextEdit from 'components/TextEdit'
import CheckBox from 'components/CheckBox'
// ruleSlice
import { updateRuleEditCriterion } from 'features/rules/rulesSlice'
import * as R from 'ramda'

// eslint-disable-next-line
import { green, redf } from 'logger'

const CriterionEdit = ({ criterion }) => {

  const [_criterion, _setCriterion] = useState(criterion)
  const { operation, field, value, active } = _criterion
  const dispatch = useDispatch()

  console.group('criterion')
  green('operation', operation)
  green('field', field)
  green('value', value)
  green('active', active)
  console.groupEnd()
  
  // const { _id, field, operation, value, active } = criterion

  // const [_values, _setValues] = useState({
  //   _id,
  //   field: field || fields.description,
  //   operation: operation || operators.beginsWith,
  //   value,
  //   active
  // })


  const _handleChange = (event) => {
    
    const { name, value, checked } = event.target
    console.group('_handleChange vars')
    green('name', name)
    green('value', value)
    green('checked', checked)
    console.groupEnd()

    // let newCriterion = null
    // if (name === 'active') {
      const newCriterion = R.mergeRight(_criterion, { [name]: name === 'active' ? checked : value })
      _setCriterion(newCriterion)
      
      green('newCriterion', newCriterion)
    // } else {
      // _setCriterion(R.mergeRight(_criterion, { [name]: value }))
    // }

    
    // 1. merge the changes into the criterion

    // 2. send new criterion to updateRuleEditCriterion


    // const newValues = mergeRight(_values, { [name]: value })

    // _setValues(newValues)


    // TODO: handleDirtyChange(true)
    // TODO: handleCriterionChange(newValues)
  }

  const _handleBlur = (event) => {
    const { name, value } = event.target
    console.group('_handleBlur vars')
    green('name', name)
    green('value', value)
    console.groupEnd()

    // let newCriterion = null
    // if (name === 'active') {
      const newCriterion = R.mergeRight(_criterion, { [name]: value })
      _setCriterion(newCriterion)
      
      dispatch(updateRuleEditCriterion(newCriterion))
      green('newCriterion', newCriterion)
  }

  return (
    <div className="d-flex">
      <CheckBox name="active" checked={active} onChange={_handleChange} />      
      <Select name="field" value={field} onChange={_handleChange} maxWidth={100} disabled={!active} onBlur={_handleBlur}>
        <option value={fields.description.name}>
          {fields.description.description}
        </option>
        <option value={fields.type.name}>{fields.type.description}</option>
        <option value={fields.credit.name}>{fields.credit.description}</option>
        <option value={fields.debit.name}>{fields.debit.description}</option>
        <option value={fields.acctId.name}>{fields.acctId.description}</option>
        <option value={fields.date.name}>{fields.date.description}</option>
      </Select>

      <Select name="operation" value={operation} onChange={_handleChange} maxWidth={100} disabled={!active} onBlur={_handleBlur}>
        <option value={operators.beginsWith}>Begins with</option>
        <option value={operators.contains}>Contains</option>
        <option value={operators.doesNotContain}>Does not contian</option>
        <option value={operators.equals}>Equals</option>
      </Select>
      <TextEdit name="value" value={value} onChange={_handleChange} minWidth={'20%'} disabled={!active} onBlur={_handleBlur}/>
      <Button variant="primary" /*onClick={_criterionRemove}*/  size="sm">Remove</Button>
    </div>
  )
}

export default CriterionEdit


/*



import React, { useState } from 'react'
import {
  operators,
  transactionFields as fields,
} from 'globalConstants'
import { mergeRight } from 'ramda'
import Button from 'components/Button'
import Select from 'components/Select'
import TextEdit from 'components/TextEdit'
import CheckBox from 'components/CheckBox'

// eslint-disable-next-line
import { green, redf } from 'logger'

const CriterionEdit = ({ criterion }) => {

  const { _id, field, operation, value, active } = criterion

  const [_values, _setValues] = useState({
    _id,
    field: field || fields.description,
    operation: operation || operators.beginsWith,
    value,
    active
  })

  const _handleChange = (event) => {
    const { name, value } = event.target
    const newValues = mergeRight(_values, { [name]: value })

    _setValues(newValues)
    // TODO: handleDirtyChange(true)
    // TODO: handleCriterionChange(newValues)
  }
  return (
    <div className="d-flex">
      <CheckBox checked={_values.active} />      
      <Select name="field" value={_values.field} onChange={_handleChange} maxWidth={100} disabled={!_values.active}>
        <option value={fields.description.name}>
          {fields.description.description}
        </option>
        <option value={fields.type.name}>{fields.type.description}</option>
        <option value={fields.credit.name}>{fields.credit.description}</option>
        <option value={fields.debit.name}>{fields.debit.description}</option>
        <option value={fields.acctId.name}>{fields.acctId.description}</option>
        <option value={fields.date.name}>{fields.date.description}</option>
      </Select>

      <Select name="operation" value={_values.operation} onChange={_handleChange} maxWidth={100} disabled={!_values.active}>
        <option value={operators.beginsWith}>Begins with</option>
        <option value={operators.contains}>Contains</option>
        <option value={operators.doesNotContain}>Does not contian</option>
        <option value={operators.equals}>Equals</option>
      </Select>
      <TextEdit name="value" value={_values.value} onChange={_handleChange} minWidth={'20%'} disabled={!_values.active}/>
      <Button variant="primary" onClick={_criterionRemove}  size="sm">Remove</Button>
    </div>
  )
}

export default CriterionEdit









*/
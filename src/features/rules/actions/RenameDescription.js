
import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ruleEditActionUpdate } from 'features/rules'
import * as R from 'ramda'

// eslint-disable-next-line
import { purple, green, redf } from 'logger'
import { selectRuleEditRenameAction } from 'features/selectors'

export const RenameDescription = () => {

  const [_action, _setAction] = useState(useSelector(selectRuleEditRenameAction))
  const { replaceWithValue, _id: actionId } = _action

  const dispatch = useDispatch()

  const _onChange = (event) => {
    const { value } = event.target
    const newAction = R.mergeRight(_action, { replaceWithValue: value })
    _setAction(newAction)
    dispatch(ruleEditActionUpdate(newAction))
  }

  return (
    <input
      key={actionId}
      type="text"
      value={replaceWithValue}
      name="replaceWithValue"
      onChange={_onChange}
      // onBlur={_onBlur}
      placeholder='hi'
    />
  )
}

/*



import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ruleEditActionUpdate, selectRuleEditAction } from 'features/rules'
import * as R from 'ramda'

// eslint-disable-next-line
import { purple, green, redf } from 'logger'

export const RenameDescription = ({ actionId }) => {

  const action = useSelector(state => selectRuleEditAction(actionId, state))

  const dispatch = useDispatch()

  const _onChange = (event) => {
    const { value } = event.target
    const newAction = R.mergeRight(action, { replaceWithValue: value })
    dispatch(ruleEditActionUpdate(newAction))
  }

  return (
    <input
      key={actionId}
      type="text"
      value={action.replaceWithValue}
      name="replaceWithValue"
      onChange={_onChange}
      // onBlur={_onBlur}
      placeholder='hi'
      // onKeyDown={_onKeyDown}
    />
  )
}


*/

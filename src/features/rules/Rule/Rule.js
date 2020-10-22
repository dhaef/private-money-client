import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Criteria from './Criteria'
import Actions from './Actions'
import Button from 'components/Button'
import RuleId from './RuleId'
import {
  selectRuleEdit,
} from 'features/ruleEdit/ruleEditSlice'
import {
  ruleUpdate,
  ruleCreate
} from 'features/ruleEdit/ruleEditSlice'
import styled from 'styled-components'
import { isTmpRule } from 'fields/rules'

import {
  selectActiveTransaction,
  selectActiveTransactionId
} from 'features/transactions/transactionsSlice'

// try
import {
  fetchCriteriaResults,
} from 'features/criteriaResults/criteriaResultsSlice'

import * as R from 'ramda'
import { ruleEditSet, ruleTmpMakeId, ruleTmpMake } from 'features/ruleEdit/ruleEditSlice'

// eslint-disable-next-line
import { green, purple } from 'logger'
import RenderCount from 'components/RenderCount'

const RuleDiv = styled.div``

let countTotal = 0
let countReturn = 0

const Rule = () => {
  countTotal = countTotal + 1

  const activeTransaction = useSelector(selectActiveTransaction)
  // green('activeTransaction', activeTransaction)

  const activeTransactionId = useSelector(selectActiveTransactionId)
  // green('type activeTransactionId', R.type(activeTransactionId))

  const ruleEdit = useSelector(selectRuleEdit)
  // green('type ruleEdit', R.type(ruleEdit))

  const dispatch = useDispatch()

  useEffect(() => {
    if (R.type(activeTransaction) !== 'Null') {
      const origDescription = activeTransaction.origDescription
      const tmpRule = ruleTmpMake(ruleTmpMakeId(), origDescription)
      dispatch(ruleEditSet(tmpRule)) // TODO: 1) finish this. 2) eliminate ruleTmp
    }
  }, [activeTransaction])

  if (!ruleEdit) {
    return null
  }

  const { _id: ruleId } = ruleEdit

  const _handleSaveEditButtonClick = () => {
    // green('Rule: ruleEdit', ruleEdit)
    if (isTmpRule(ruleEdit)) {

      dispatch(ruleCreate(ruleEdit))
      // green('CREATED')
    } else {
      dispatch(ruleUpdate(ruleEdit))
      // green('UPDATED')
    }
  }



  countReturn = countReturn + 1
  return (
    <>
      <RuleDiv id="Rule">
        {/* <RenderCount
          componentName="Rule"
          countTotal={{ actual: countTotal, min: 1, max: 2 }}
          countReturn={{ actual: countReturn, min: 2, max: 2 }}
        /> */}
        <RuleId ruleId={ruleId} />
        <Button onClick={_handleSaveEditButtonClick}>Save</Button>
        <Criteria />
        <Actions />
      </RuleDiv>

    </>
  )
}

export default Rule


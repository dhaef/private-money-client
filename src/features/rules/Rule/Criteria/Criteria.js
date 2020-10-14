import React from 'react'
import { useSelector } from 'react-redux'
import CriterionEdit from './CriterionEdit'
import {
  selectRuleEditCriteria,
  //   selectRuleEdit
} from 'features/ruleEdit/ruleEditSlice'
import Button from 'components/Button'
import styled from 'styled-components'

// eslint-disable-next-line
import { green, redf, yellow, purple } from 'logger'
import RenderCount from 'components/RenderCount'

const Row = styled.div`
  display: flex;
  align-items: center;
  background-color: red;
`

let countTotal = 0
let countReturn = 0

const Criteria = () => {

  countTotal = countTotal + 1

  const criteria = useSelector(selectRuleEditCriteria)
  const _handleButtonClick = () => { }

  if (!criteria) {
    return null
  }

  countReturn = countReturn + 1
  return (
    <div id="Criteria">
      <RenderCount
        name="Criteria"
        countTotal={{ actual: countTotal, min: 2, max: 2 }}
        countReturn={{ actual: countReturn, min: 2, max: 2 }}
      />
      <Row id="Criteria.Row">
        <h4>Criteria</h4>

        <Button onClick={_handleButtonClick}>Add</Button>
        <Button onClick={_handleButtonClick}>Reset</Button>
      </Row>

      {criteria.map((c) => (
        <CriterionEdit key={c._id} criterion={c} />
      ))}
    </div>
  )
}

export default Criteria

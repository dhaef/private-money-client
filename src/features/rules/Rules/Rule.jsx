import React from 'react'
import Criteria from './Criteria'
import Actions from './Actions'

const Rule = ({ ruleId }) => {
  return (
    <tr>
      <td colSpan="10">
        <div colSpan="10">{`RuleId: ${ruleId}`}</div>
        <div /* style={{ backgroundColor: 'green' }} */>
          <Criteria ruleId={ruleId} />
        </div>
        <div /* style={{ backgroundColor: 'blue', padding: 5 }} */ >
          <Actions ruleId={ruleId} />
        </div>
      </td>
    </tr>
  )
}

export default Rule
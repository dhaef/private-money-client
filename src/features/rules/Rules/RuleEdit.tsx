import React from 'react'
import Criteria from './Criteria'
import Actions from './Actions'
import Button from 'components/Button'
import RuleId from './RuleId'

// eslint-disable-next-line
import { green } from 'logger'

const RuleEdit = ({ ruleId }: { ruleId: string }) => {

  const _handleSaveEditButtonClick = () => {}

  return (
    <>
      <div id="CriterionEdit" className="d-flex">
        <RuleId ruleId={ruleId} />
        <Button onClick={_handleSaveEditButtonClick}>Save</Button>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-plus-circle-fill text-success"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
          />
        </svg>
        {/* <svg
            class="bi bi-alert-triangle text-success"
            width="32"
            height="32"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            ...
          </svg> */}
      </div>
      <Criteria ruleId={ruleId} />
      <Actions ruleId={ruleId} />
    </>
  )
}

export default RuleEdit

/*


const RuleEdit = ({ ruleId }) => {
  const [_isEditMode, _setIsEditMode] = useState(false)

  const _handleSaveEditButtonClick = () => _setIsEditMode(!_isEditMode)

  return (
    <tr>
      <td colSpan="10">
        <div className="d-flex">
          <div>{`RuleId: ${ruleId}`}</div>
          {_isEditMode ? (
            <Button onClick={_handleSaveEditButtonClick}>Save</Button>
          ) : (
            <Button onClick={_handleSaveEditButtonClick}>Edit</Button>
          )}
        </div>

        <div>
          <Criteria ruleId={ruleId} />
        </div>
        <div>
          <Actions ruleId={ruleId} isEditMode={_isEditMode} />
        </div>
      </td>
    </tr>
  )
}

export default RuleEdit

*/
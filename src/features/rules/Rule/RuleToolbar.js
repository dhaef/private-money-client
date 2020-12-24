import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from 'components/Button'
import { selectRuleEditIsDirty } from 'features/selectors'

const RuleToolbarDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
`

const RuleToolbarH4 = styled.h4`
  margin-right: 12px;
  margin-bottom: 0;
`

const Btn = styled(Button)`
  margin-right: 12px;
`

export const RuleToolbar = ({ save, cancel, deleteRule }) => {
  const _dirty = useSelector(selectRuleEditIsDirty)
  return (
    <RuleToolbarDiv>
      <Btn onClick={save} disabled={!_dirty}>
        Save
      </Btn>
      <Btn onClick={cancel}>Cancel</Btn>
      <Btn onClick={deleteRule}>Delete</Btn>
    </RuleToolbarDiv>
  )
}

import React from 'react'
import { TableRow } from './TableRow'

// eslint-disable-next-line
import { green } from 'logger'

const makeOldData = ({
  date,
  description,
  origDescription,
  amount,
  category1,
  category2
}) => {
  return {
    date,
    description,
    origDescription,
    amount,
    category1,
    category2
  }
}

const makeNewData = (actions, transaction) => {
  const { replaceWithValue } = actions[0]
  const { category1, category2 } = actions[1]

  const { date, amount } = transaction

  return {
    date: date,
    description: replaceWithValue,
    amount: amount,
    category1,
    category2: category2
  }
}

const isDiff = (value1, value2) => value1 !== value2

/**
 *
 * @param {object} oldFields { date, description, amount, category1, category2 }
 * @param {object} newFields { date, description, amount, category1, category2 }
 * @returns {object} { description: boolean, category1: boolean, category2: boolean}
 */
const createDiffs = (oldFields, newFields) => {
  return {
    description: isDiff(oldFields.description, newFields.description),
    category1: isDiff(oldFields.category1, newFields.category1),
    category2: isDiff(oldFields.category2, newFields.category2)
  }
}

export const TableBody = ({ actions, transaction }) => {
  const oldData = makeOldData(transaction)
  const newData = makeNewData(actions, transaction)
  const diffs = createDiffs(oldData, newData)

  return (
    <tbody>
      <TableRow data={oldData} isOriginalData={true} diffs={diffs} />
      <TableRow data={newData} isOriginalData={false} diffs={diffs} />
    </tbody>
  )
}

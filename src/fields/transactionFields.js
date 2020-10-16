// import { isArray } from './dataTypes/isArray'
// import { isBoolean } from './dataTypes/'
// import { isDate } from './dataTypes/isDate'
// import { isNumber } from './dataTypes/isNumber'
// import { isString } from './dataTypes/isString'
import { format } from 'date-fns'
import * as R from 'ramda'
import { 
  isArray,
  isBoolean,
  isDate,
  isNumber,
  isString
} from 'dataTypes'

export const transactionFields = {
  _id: {
    name: '_id',
    description: 'Id',
    validate: isString
  },
  acctId: {
    name: 'acctId',
    description: 'AccountId',
    isCriteriaField: true,
    validate: isString
  },
  amount: {
    name: 'amount',
    description: 'Amount',
    isCriteriaField: true,
    validate: isNumber
  },
  category1: {
    name: 'category1',
    description: 'Category1'
  },
  category2: {
    name: 'category2',
    description: 'Category2',
    validate: isString
  },
  checkNumber: {
    name: 'checkNumber',
    description: 'Check#',
    validate: isString
  },
  date: {
    name: 'date',
    description: 'Date',
    formatFn: (d) => format(new Date(d), 'MM/dd/yyyy'),
    isCriteriaField: true,
    validate: isDate,
  },
  description: {
    name: 'description',
    description: 'Description',
    isCriteriaField: true,
    validate: isString
  },
  duplicate: {
    name: 'duplicate',
    description: 'Duplicate'
  },
  duplicateStatus: {
    name: 'duplicateStatus',
    description: 'DuplicateStatus'
  },
  omit: {
    name: 'omit',
    description: 'Omit',
    formatFn: (d) => (d ? 'yes' : 'no')
  },
  origDescription: {
    name: 'origDescription',
    description: 'OrigDescription',
    validate: isString
  },
  ruleIds: {
    name: 'ruleIds',
    description: 'RuleIds',
    validate: isArray
  },
  taxDeduct: {
    name: 'taxDeduct',
    description: 'taxDeduct',
    validate: isBoolean
  },
  type: {
    name: 'type',
    description: 'Type',
    isCriteriaField: true,
    validate: isString
  }
}

export default transactionFields
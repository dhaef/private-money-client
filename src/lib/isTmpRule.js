
// eslint-disable-next-line
import { blue } from 'logger'


const isTmpRule = ruleId => {
  blue('ruleId', ruleId)
//   return startsWith('tmp_', ruleId)
//   ruleId.startsWith('tmp_')
  return true
}

export default isTmpRule
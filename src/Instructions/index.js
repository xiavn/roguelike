import insReducer, { selectors as insSelectors} from './reducer'
import * as insActions from './actions'
import * as insConsts from './constants'
import Instructions from './Instructions'

export default Instructions
export {
  insReducer,
  insSelectors,
  insActions,
  insConsts
}
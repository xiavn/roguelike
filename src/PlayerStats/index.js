import * as psActions from './actions'
import * as psConstants from './constants'
import psReducer, { selectors as psSelectors } from './reducer'
import PlayerStats from './PlayerStatsContainer'

export default PlayerStats
export {
  psActions,
  psConstants,
  psSelectors,
  psReducer
}
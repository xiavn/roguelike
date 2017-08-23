import { connect } from "react-redux"
import PlayerStats from './PlayerStats'

import {saveClass, increaseLevel} from "./actions"
import { selectors } from "./reducer"
import { logActions } from "../DungeonLog"

const mapStateToProps = state => ({
	playerStats: selectors.playerStats(state)
})

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		sendMessage: (message) => {
// 			dispatch(sendMessage(message))
// 		},
// 		increaseLevel: (by) => {
// 			dispatch(increaseLevel(by))
// 		},
// 		saveClass: (pClass) => {
// 			dispatch(saveClass(pClass))
// 		}
// 	}
// }

export default connect(
	mapStateToProps,
	{ increaseLevel, saveClass, sendMessage: logActions.sendMesage }
)(PlayerStats)
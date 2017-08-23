import { connect } from "react-redux"
import { selectors } from "./reducer"
import DungeonLog from "./DungeonLog"

const mapStateToProps = state => ({
  messageLog: selectors.messageLog(state)
})

export default connect(
  mapStateToProps
)(DungeonLog)
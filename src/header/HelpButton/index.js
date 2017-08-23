import { connect } from "react-redux"
import HelpButton from './HelpButton'
import { insActions } from "../../Instructions"

export default connect(
	undefined,
	{ showHelp: insActions.showInstructions }
)(HelpButton)
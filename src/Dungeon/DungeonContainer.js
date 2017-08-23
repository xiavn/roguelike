import { connect } from "react-redux"
import Dungeon from "./Dungeon"

const mapStateToProps = state => ({
  dungeon: state.dungeon
})

export default connect(
  mapStateToProps
)(Dungeon)
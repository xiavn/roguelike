import React, { PropTypes } from "react"
import Column from './Column'

const Dungeon = ( {dungeon} ) => {
	const columns = dungeon.map((column, i) => <Column column={column} key={i} />)
	return <div className="dungeon-map">{columns}</div>
}

Dungeon.propTypes = {
	dungeon: PropTypes.array.isRequired
}

export default Dungeon



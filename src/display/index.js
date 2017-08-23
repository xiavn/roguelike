import React from "react"

import Stats from "./Stats"
import DungeonInfo from "./DungeonInfo"
import DungeonLog from "../DungeonLog"
import Dungeon from "../Dungeon"


const Display = () => 
	<div>
		<DungeonInfo />
		<Dungeon />
		<DungeonLog />
		<Stats />
	</div>

export default Display
import React from "react";

import Stats from "./stats";
import DungeonInfo from "./dungeonInfo";
import DungeonLog from "./dungeonLog";
import DungeonMap from "./map/dungeonMap";


const Display = () => 
	<div>
		<DungeonInfo />
		<DungeonMap />
		<DungeonLog />
		<Stats />
	</div>;

export default Display;
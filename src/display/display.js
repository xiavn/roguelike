import React from "react";

import Stats from "./stats";
import DungeonInfo from "./dungeonInfo";
import DungeonMap from "./map/dungeonMap";


const Display = () => 
	<div>
		<DungeonInfo />
		<DungeonMap />
		<Stats />
	</div>;

export default Display;
import React, { PropTypes } from "react";

import {classOptions} from "../options";

const PlayerStats = ( { playerStats }) => 
	<ul>
		<li key="name" >Name: { playerStats.name }</li>
		<li key="class" >Class: Barbarian</li>
		<li key="level" >Level: 1</li>
		<li key="health" >Health: 17/24</li>
		<li key="resource" >Resource: 4/4</li>
		<li key="inventory" >Inventory:
			<ul>
				<li>Health Potion</li>
				<li>Shiny Sword</li>
				<li>Wooden Shield</li>
			</ul>
		</li>
	</ul>;

PlayerStats.propTypes = {
	playerStats: PropTypes.shape({
		name: PropTypes.string.isRequired,
		class: PropTypes.oneOf(classOptions.classes).isRequired,
		level: PropTypes.number.isRequired,
		health: PropTypes.shape({
			current: PropTypes.number.isRequired,
			total: PropTypes.number.isRequired
		}).isRequired,
		resource: PropTypes.shape({
			type: PropTypes.oneOf(classOptions.resources).isRequired,
			current: PropTypes.number.isRequired,
			total: PropTypes.number.isRequired
		}).isRequired,
		inventory: PropTypes.arrayOf(PropTypes.number)
	}).isRequired
};

export default PlayerStats;


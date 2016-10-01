import React, { PropTypes } from "react";
import { connect } from "react-redux";

import {classOptions} from "../options";

const PlayerStatsList = ( { playerStats } ) => 
	<ul>
		<li key="name" >Name: { playerStats.name }</li>
		<li key="class" >Class: Barbarian</li>
		<li key="level" >Level: 1</li>
		<li key="health" >Health: 17/24</li>
		<li key="resource" >Resource: 4/4</li>
		<li key="inventory" >
			<StatsSubList stat={playerStats.inventory} />
		</li>
		<li key="abilities" >
			<StatsSubList stat={playerStats.abilities} />
		</li>

	</ul>;

PlayerStatsList.propTypes = {
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
		inventory: PropTypes.arrayOf(PropTypes.object),
		abilities: PropTypes.arrayOf(PropTypes.object)
	}).isRequired
};

const StatsSubList = ( {stat} ) => {
	<ul>
		<li>Shield</li>
		<li>Sword</li>
		<li>Potion</li>
	</ul>
};

StatsSubList.propTypes = {
	stat: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
	return {
		playerStats: state.playerStats
	};
};

const PlayerStats = connect(mapStateToProps)(PlayerStatsList);

export default PlayerStats;

export { StatsSubList, PlayerStatsList };
import React, { PropTypes } from "react";
import { connect } from "react-redux";

import {classOptions} from "../options";

const PlayerStatsList = ( { playerStats } ) => 
	<ul>
		<li key="name" >Name: { playerStats.name }</li>
		<li key="class" >Class: { playerStats.class }</li>
		<li key="level" >Level: { playerStats.level }</li>
		<li key="health" >Health: { playerStats.health.current }/{ playerStats.health.total }</li>
		<li key="attributes" >
			<StatsSubList stat={ playerStats.attributes } />
		</li>
		<li key="resource" >{ playerStats.resource.type}: { playerStats.resource.current }/{ playerStats.resource.total }</li>
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
		attributes: PropTypes.object.isRequired,
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
	let subList = [];
	if (Array.isArray(stat)) {
		subList = stat.map((item) => {
			return <li key={item.name}><span className="statName">{item.name}</span><span className="statItem">{item.value}</span></li>;
		});
	} else {
		for (var item in stat) {
			subList.push(<li key={item}><span className="statName">{item}</span><span className="statItem">{stat[item]}</span></li>);
		}
	}
	return <ul>{subList}</ul>;
};

StatsSubList.propTypes = {
	stat: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	])
};

const mapStateToProps = (state) => {
	return {
		playerStats: state.playerStats
	};
};

const PlayerStats = connect(mapStateToProps)(PlayerStatsList);

export default PlayerStats;

export { StatsSubList, PlayerStatsList };
import React, { PropTypes } from 'react'
import StatsSubList from './StatsSubList'
import { classOptions } from '../options'

const PlayerStats = ( { playerStats } ) =>
  <ul>
    <li key="name" >Name: { playerStats.name }</li>
    <li key="class" >Class: { playerStats.class }</li>
    <li key="level" >Level: { playerStats.level }</li>
    <li key="health" >Health: { playerStats.health.current }/{ playerStats.health.total }</li>
    <li key="attributes" >Attributes:
      <StatsSubList stat={ playerStats.attributes } />
    </li>
    <li key="resource" >{ playerStats.resource.type}: { playerStats.resource.current }/{ playerStats.resource.total }</li>
    <li key="inventory" >Inventory:
      <StatsSubList stat={playerStats.inventory} />
    </li>
    <li key="abilities" >Abilities:
      <StatsSubList stat={playerStats.abilities} />
    </li>
	</ul>

PlayerStats.propTypes = {
	playerStats: PropTypes.shape({
		name: PropTypes.string.isRequired,
		class: PropTypes.oneOf([...classOptions.classes,"peasant"]).isRequired,
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
}

export default PlayerStats
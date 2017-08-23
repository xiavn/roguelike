import React, { PropTypes } from 'react'

const StatsSubList = ( {stat} ) => {
	let subList = [];
	if (Array.isArray(stat)) {
		subList = stat.map((item) => {
			return <li key={item.name}><span className="statName">{item.name}</span><span className="statItem">{item.value}</span></li>;
		})
	} else {
		for (var item in stat) {
			subList.push(<li key={item}><span className="statName">{item}</span><span className="statItem">{stat[item]}</span></li>);
		}
	}
	return <ul>{subList}</ul>;
}

StatsSubList.propTypes = {
	stat: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	])
}

export default StatsSubList
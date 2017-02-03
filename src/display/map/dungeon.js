import React, { PropTypes } from "react";
import { connect } from "react-redux";

export const Dungeon = ( {dungeon} ) => {
	const columns = dungeon.map((column, i) => {
		return <Column column={column} key={i} />;
	});

	return <div className="dungeon-map">{columns}</div>;
};

Dungeon.propTypes = {
	dungeon: PropTypes.array.isRequired
};

export const Column = ( {column} ) => {
	const cells = column.map((cell, i) => {
		return <Cell type={cell.type} exits={cell.exits} key={i} />;
	});
	return <div className="column">{cells}</div>;
};

export const Cell = ( {type, exits} ) => {
	let walls = '';
	exits.forEach((exit) => {
		walls += ` ${exit.name}`;
	});
	let tile = `cell ${type}${walls}`;
	return <div className={tile}></div>;
};

const mapStateToProps = (state) => {
	return {
		dungeon: state.dungeon
	};
};

export default connect(mapStateToProps)(Dungeon);
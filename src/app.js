import React from 'react';
import {render} from 'react-dom';

class Roguelike extends React.Component {
	render() {
		return (
			<h1>Hello!</h1>
		);
	}
}

render(<Roguelike />, document.getElementById('app'));
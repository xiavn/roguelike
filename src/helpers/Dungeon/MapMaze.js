import Map from "./Map";
import Dwarf from "./EntityDwarf";


export default class Maze extends Map {
	constructor(width, height) {
		super(width, height);
		this.createMaze();
	}

	createMaze() {
		const Dorn = new Dwarf(this, this.chooseCell());
		Dorn.cell.excavate();
		Dorn.checkRoute();
		Dorn.collapseDeadEnds(30);
		Dorn.connectDeadEnds(80);
	}

	addRooms() {
		// Establish min & max height and width
		
		// "Create" Room
		
		//Set bestScore to Infinity
		//Inititalise bestPostiion
		let bestScore = Infinity,
			bestPosition;

		// For every cell in the map
			// Place top corner of room
			// Set currentScore to 0
			// Increase score based on:
				// +1 for every cell in the room adjacent to a corridor
				// +3 for every cell overlapping a corridor
				// +100 for every cell overlapping a room
			// If currentScore < bestScore && > 0
				// bestScore = currentScore
				// Log position as bestPosition
		
		//Place room at bestLocation
		
		//Add at least one door to an adjacent corridor or room
	}
}
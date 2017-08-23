import Map from "./Map"
import Dwarf from "./EntityDwarf"


export default class Maze extends Map {
	constructor(width, height) {
		super(width, height)
		this.createMaze()
	}

	createMaze() {
		const Dorn = new Dwarf(this, this.chooseCell())
		Dorn.cell.excavate()
		Dorn.checkRoute()
		Dorn.collapseDeadEnds(30)
		Dorn.connectDeadEnds(80)
	}
}
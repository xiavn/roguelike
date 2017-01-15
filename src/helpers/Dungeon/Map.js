import Cell from "./Cell";
import Compass from "./Compass";

export default class DungeonMap {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.compass = new Compass();
		this._map = this.createStartMap();
	}

	get map() {
		return this._map;
	}

	get mapPrint() {
		let rows = [];
		for (let i = 0; i < this.height; i++) {
			rows.push([]);
			for (let p = 0; p< this.width; p++) {
				let symbol = this.map[p][i].type ==="floor" ? "X" : " ";
				rows[i] += symbol;
			}
		}
		
		let string = rows.join("\n");
		return string;
	}

	cellsOfType(type) {
		let available = [];
		for(let i = 0; i < this.width; i++) {
			for(let p = 0; p < this.height; p++) {
				if (this.map[i][p].type === type) {
					available.push(this.map[i][p]);
				}
			}
		}
		return available;
	}

	isInside(x,y) {
		return x < 0 || y < 0 || x >= this.width || y >= this.height ? false : true;
	}

	isType(type,x,y) {
		return this.map[x][y].type === type ? true : false;
	}

	createStartMap() {
		let map = [];
		for (let i = 0; i < this.width; i++) {
			map.push([]);
		}

		map.forEach((column, i) => {
			for (let p = 0; p < this.height; p++) {
				column.push(new Cell(i,p));
			}
		});
		return map;
	}

	chooseCell(list = []) {
		if (list.length > 0) {
			const n = Math.floor(Math.random() * list.length),
				cell = list[n],
				x = cell[0],
				y = cell[1];
			return cell;

		} else {
			let x = Math.floor(Math.random() * this.width),
				y = Math.floor(Math.random() * this.height);
			
			return this.map[x][y];
		} 
	}
}
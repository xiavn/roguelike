import { expect } from "chai";

import Dungeon, { DungeonMap, Cell, dHeight, dWidth} from "../src/helpers/createDungeon";

const dungeon = new Dungeon();

describe("Dungeon", () => {
	describe("_map", () => {
		it("contains an instance of DungeonMap", () => {
			expect(dungeon._map).to.be.an.instanceOf(DungeonMap);
		});
	});
	describe(".map", () => {
		it("should allow the player to access any floor tile from any other floor tile", () => {
			let dungeon = new Dungeon(30,30);

			let floor = dungeon._map.cellsOfType("floor"),
				begin = dungeon._map.chooseCell(floor),
				finish = dungeon._map.chooseCell(floor);

			let directions = ["north", "south", "east", "west"];

			console.log(begin);
			console.log(finish);

			console.log(dungeon._map.mapPrint);

			const moveToExit = (start, end, breadcrumbs = []) => {
				if (start === end) {
					console.log(`did it: ${breadcrumbs}`);
					return true;
				}
				if (breadcrumbs.indexOf(start.location) !== -1) {
					//console.log(`been here! ${start.location}`);
					return false;
				}
				let trail = [...breadcrumbs, start.location];
				//console.log(`trail so far: ${trail}`);
				for (let i = 0; i < 4; i++) {
					let dir = directions[i];
					if (start.exits[dir]) {
						
						let current = dungeon._map.move(dir, start);
						//console.log(`going: ${dir}`);
						if(moveToExit(current, end, trail)) {
							return true;
						}
					} else {
						//console.log(`${start.location} - can't go ${dir}`);
					}
				}
			};

			expect(moveToExit(begin, finish)).to.be.true;
		});
			
	});
});

const x = 75,
	y = 20;

const dungeonMap = new DungeonMap(),
	dungeonMapCustom = new DungeonMap(x, y);

describe("DungeonMap", () => {
	describe(".map", () => {
		let map = dungeonMap.map,
			customMap = dungeonMapCustom.map;
		it("returns an array of columns", () => {
			expect(map).to.be.an("array")
				.to.have.lengthOf(dWidth);
			expect(customMap).to.be.an("array")
				.to.have.lengthOf(x);

			describe("each column", () => {
				it("should be an array of cells", () => {
					map.forEach((column) => {
						expect(column).to.be.an("array")
							.to.have.lengthOf(dHeight);
					});
					customMap.forEach((column) => {
						expect(column).to.be.an("array")
							.to.have.lengthOf(y);
					});

					describe("each cell", () => {
						const cell = dungeonMap.chooseCell();
						it("should have a type", () => {
							expect(cell).to.have.property("type")
								.that.is.a("string");
						});
						it("should have a visited key", () => {
							expect(cell).to.have.property("visited")
								.that.is.a("boolean");
						});
						it("should have a location", () => {
							expect(cell).to.have.property("location")
								.that.is.an("array");
							expect(map[0][0].location).to.eql([0,0]);
							expect(map[10][10].location).to.eql([10,10]);
						});
					});
				});
			});
		});
		describe(".tunnel(dir)", () => {
			it("creates a tunnel to the north, south, east and west", () => {
				const tunnelDungeon = new DungeonMap(4,4);
				let start = tunnelDungeon.map[2][2];
				tunnelDungeon.currentCell = start;
				tunnelDungeon.tunnel("north");
				expect(tunnelDungeon.currentCell).to.equal(tunnelDungeon.map[2][1]);
				expect(start.exits).to.have.property("north", true);

				tunnelDungeon.currentCell = start;
				tunnelDungeon.tunnel("east");
				expect(tunnelDungeon.currentCell).to.equal(tunnelDungeon.map[3][2]);
				expect(start.exits).to.have.property("east", true);

				tunnelDungeon.currentCell = start;
				tunnelDungeon.tunnel("south");
				expect(tunnelDungeon.currentCell).to.equal(tunnelDungeon.map[2][3]);
				expect(start.exits).to.have.property("south", true);

				tunnelDungeon.currentCell = start;
				tunnelDungeon.tunnel("west");
				expect(tunnelDungeon.currentCell).to.equal(tunnelDungeon.map[1][2]);
				expect(start.exits).to.have.property("west", true);

				expect(start.exits).to.have.property("north", true);
				expect(start.exits).to.have.property("east", true);
				expect(start.exits).to.have.property("south", true);
				expect(start.exits).to.have.property("west", true);

			});
			it("won't tunnel past the edge of the map", () => {
				const tunnelDungeon = new DungeonMap(4,4);
				let start = tunnelDungeon.map[0][0];
				tunnelDungeon.currentCell = start;
				tunnelDungeon.tunnel("north");
				expect(tunnelDungeon.currentCell).to.equal(start);
				tunnelDungeon.tunnel("west");
				expect(tunnelDungeon.currentCell).to.equal(start);
				start = tunnelDungeon.map[3][3];
				tunnelDungeon.currentCell = start;
				tunnelDungeon.tunnel("south");
				expect(tunnelDungeon.currentCell).to.equal(start);
				tunnelDungeon.tunnel("east");
				expect(tunnelDungeon.currentCell).to.equal(start);
			});	
		});
			
	});

	describe(".move(dir, from)", () => {
		it("returns the cell in the given direction ", () => {
			const moveDungeon = new DungeonMap(5,5);
			const start = moveDungeon.map[3][3];
			expect(moveDungeon.move('north', start)).to.equal( moveDungeon.map[3][2]);
			expect(moveDungeon.move('south', start)).to.equal( moveDungeon.map[3][4]);
			expect(moveDungeon.move('east', start)).to.equal( moveDungeon.map[4][3]);
			expect(moveDungeon.move('west', start)).to.equal( moveDungeon.map[2][3]);
			expect(moveDungeon.move('north',  moveDungeon.map[0][0])).to.equal( moveDungeon.map[0][0]);
		});
			
	});
	describe(".notVisited and .visited", () => {
		it("should return an array of non visited tiles and visited tiles", () => {
			const smallMap = new DungeonMap(2,2);
			expect(smallMap.notVisited).to.have.length(4);
			expect(smallMap.notVisited).to.deep.include.members([[0,0],[0,1],[1,1],[1,0]]);
			expect(smallMap.visited).to.have.length(0);
			smallMap.map[0][0].visited = true;
			expect(smallMap.notVisited).to.have.length(3);
			expect(smallMap.notVisited).to.deep.include.members([[0,1],[1,1],[1,0]]);
			expect(smallMap.visited).to.have.length(1);
			expect(smallMap.visited).to.deep.include.members([[0,0]]);
		});
	});

	describe(".cellsOfType(type)", () => {
		it("should return an array of cells of a certain type", () => {
			const smallMap = new DungeonMap(2,2);
			expect(smallMap.cellsOfType("wall")).to.have.length(4);
			smallMap.map[0][0].type = "floor";
			expect(smallMap.cellsOfType("wall")).to.have.length(3);
			expect(smallMap.cellsOfType("floor")).to.have.length(1);
			expect(smallMap.cellsOfType("floor")).to.deep.include.members([[0,0]]);
		});

	});
		
		
	describe(".chooseCell(list)", () => {
		it("should select a random cell", () => {
			expect(dungeonMap.chooseCell()).to.be.an.instanceOf(Cell);
		});
		it("should select a random cell from a list", () => {
			expect(dungeonMap.chooseCell([[0,0],[0,3],[4,5]])).to.be.oneOf([dungeonMap.map[0][0],dungeonMap.map[0][3],dungeonMap.map[4][5]]);
		});
			
	});
	describe(".chooseDirection()", () => {
		it("should select a random direction - north, south, east, west.", () => {
			expect(dungeonMap.chooseDirection()).to.be.oneOf(["north", "east", "south", "west"]);
		});
		it("should not select an excluded location", () => {
			expect(dungeonMap.chooseDirection(["north","south","east"])).to.equal("west");
		});
			
	});
	describe(".checkDirection(dir,visited)", () => {
		it("should check that tunneling in the current direction is valid - not out of bounds or already visited", () => {
			const smallMap = new DungeonMap(2,2);
			smallMap.currentCell = smallMap.map[0][0];
			expect(smallMap.checkDirection("north")).to.equal(false);
		});
	});
	describe(".createMaze", () => {
		let map = dungeonMap.map;
		dungeonMap.createMaze();
		it("should have visited every tile", () => {
			map.forEach((column) => {
				column.forEach((cell) => {
					expect(cell.visited).to.equal(true);
				});
			});
		});
		it("should not use every tile", () => {
			let count = 0;
			map.forEach((column) => {
				column.forEach((cell) => {
					if (cell.type === "rock") {
						count++;
					}
				});
			});
			expect(count).to.be.at.least(1);
		});
			
	});
		
});

describe("Cell", () => {
	describe(".visit()", () => {
		it("marks a cell as visited", () => {
			const smallMap = new DungeonMap(2,2);
			const cell = smallMap.chooseCell();
			expect(cell.visited).to.equal(false);
			cell.visit();
			expect(cell.visited).to.equal(true);
		});
	});
		
});
	
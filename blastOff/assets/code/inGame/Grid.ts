export class GameGrid {
	private readonly cells: GridCell[][]


	public constructor(size: cc.Vec2) {
		for (let x = 0; x < size.x; x++) 
			for (let y = 0; y < size.y; y++)
				this.cells[x][y] = new GridCell(new cc.Vec2(x, y))
	}
}

export class GridCell {
	private readonly address: cc.Vec2
	private item?: CellItem


	public constructor(address: cc.Vec2) {
		this.address = address
	}
	
}

export interface CellItem {}
class Grid {
	constructor(cell_size, origin_x, origin_y) {
		this.cell_size = cell_size
		this.origin_x = origin_x
		this.origin_y = origin_y
	}
}

// A child class of sprite with grid coordinates instead of pixel coordinates
class GridObject extends Phaser.GameObjects.Sprite {
	constructor(scene, grid_x, grid_y, grid, texture) {
		super(scene, 0, 0, texture)

		this.grid = grid
		this._grid_x = grid_x
		this._grid_y = grid_y

		scene.add.existing(this)

		this.setPosition(...this.position)
	}

	// using a temporary internal variable with getters and setters was recommended
	// as well as implemented by ChatGPT
	set grid_x(value) {
		this._grid_x = value
		this.setPosition(...this.position)
	}

	get grid_x() {
		return this._grid_x
	}

	set grid_y(value) {
		this._grid_y = value
		this.setPosition(...this.position)
	}

	get grid_y() {
		return this._grid_y
	}

	get position() {
		return [
			this._grid_x * this.grid.cell_size + this.grid.origin_x,
			this._grid_y * this.grid.cell_size + this.grid.origin_y
		]
	}
}

// A child class of GridObject with logic for colission
class Player extends GridObject {
	constructor(scene, grid_x, grid_y, grid, texture) {
		super(scene, grid_x, grid_y, grid, texture)
	}

	move(move_x, move_y) {
		this.grid_x += move_x
		this.grid_y += move_y
	}

	collide() {
		console.log("colission :3")
	}
}

class GameClass extends Phaser.Scene {
	preload() {
		this.load.image('cat', 'assets/cat.png')
		this.load.image('background', 'assets/background.png')
		this.load.image('tile', 'assets/sushi.png')
		this.load.image('start', 'assets/wasabi.png')
		this.load.image('end', 'assets/platform.png')
	}

	create() {
		// for the html to be able to access runProgram()
		window.GameClass = this

		this.game_grid = new Grid(100, 540, 810)
		this.add.image(540, 810, "background")
		this.code_area = document.getElementById("code_area")
		this.player = new Player(this, 0, 0, this.game_grid, "cat")
		this.level = []

		this.level_display = this.add.text(16, 16, '', { fontSize: '32px', fill: '#000' })

		this.setLevel(2)
	}

	update() {

	}

	setLevel(level_index) {
		this.level_display.setText(`Level ${level_index}`)

		fetch('levels.txt')
			.then(r => r.text())
			.then(text => {
				this.loadLevel(text, level_index)
			})
	}

	loadLevel(levels_string, level_index) {
		const level = levels_string
			.trim()
			.split(/\n\s*\n/)[level_index]
			.trim()
			.split('\r\n')
			.map(row => row.split(''))

		const width = level[0].length
		const height = level.length

		const x_start = -Math.floor(width / 2)
		const y_start = -Math.floor(height / 2)

		for (let y = y_start; y < y_start+height; y++) {
			for (let x = x_start; x < x_start+width; x++) {
				const textures = {
					X: 'tile',
					A: 'start',
					B: 'end',
				}

				console.log(`getting level[${y-y_start}][${x-x_start}]`)
				let texture = textures[level[y-y_start][x-x_start]]
				this.level.push(new GridObject(this, x, y, this.game_grid, texture))

				if (texture == 'start') {
					this.player.grid_x = x
					this.player.grid_y = y
				}
			}
		}
	}

	runProgram() {
		let code_area_text = this.code_area.value
		this.execute(code_area_text.split("\n"))
	}

	execute(lines) {
		for (const line of lines) {
			if (line.startsWith("gå")) {
				const directions = {
					upp: { x: 0, y: -1 },
					höger: { x: 1, y: 0 },
					ner: { x: 0, y: 1 },
					vänster: { x: -1, y: 0 }
				}

				const move_vector = directions[line.split(" ")[1]]
				// move_vector is falsy if input not in directions keys
				if (move_vector) {
					this.player.move(move_vector.x, move_vector.y)
					this.player.collide()
				}
			}
		}
	}
}

const config = {
	type: Phaser.CANVAS,
	width: 1080,
	height: 1620,
	parent: 'wrapper',
	scene: GameClass,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { x: 0, y: 2000 },
			debug: false
		}
	}
}

const game = new Phaser.Game(config)

window.GameClass = GameClass
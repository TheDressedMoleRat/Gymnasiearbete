class Grid {
	constructor(cell_size, origin_x, origin_y) {
		this.cell_size = cell_size
		this.origin_x = origin_x
		this.origin_y = origin_y
		this.base_origin_x = origin_x
		this.base_origin_y = origin_y
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

	// modified ChatGPT code:
	async move(move_x, move_y) {
		const target_grid_x = this.grid_x + move_x
		const target_grid_y = this.grid_y + move_y

		// This should use a function gridToWorld but GridObject.position should too
		const target_x = target_grid_x * this.grid.cell_size + this.grid.origin_x
		const target_y = target_grid_y * this.grid.cell_size + this.grid.origin_y

		await new Promise(resolve => {
			this.scene.tweens.add({
				targets: this,
				x: target_x,
				y: target_y,
				duration: 550,
				ease: 'Bounce',
				onComplete: () => {
					this.grid_x = target_grid_x
					this.grid_y = target_grid_y
					resolve()
				}
			})
		})
	}

	collide() {
		console.log("colliding")
		// out of range doesn't give an error, but if y is out of bounds the
		// second index gives an error as the first part is not an array so
		// the optional chaining operator is used
		let current_tile = this.scene.level_array[this.grid_y]?.[this.grid_x]

		if (current_tile == 'B') {
			return 1
		} else if (current_tile == '.' || current_tile == undefined) {
			return -1
		}
	}
}

class GameClass extends Phaser.Scene {
	preload() {
		this.load.image('cat', 'assets/bunny.png')
		this.load.image('background', 'assets/background.png')
		this.load.image('tile', 'assets/tile.png')
		this.load.image('start', 'assets/lilypad.png')
		this.load.image('end', 'assets/star.png')
		this.load.image('win', 'assets/image.png')
	}

	create() {
		// for the html to be able to access runProgram()
		window.GameClass = this

		this.game_grid = new Grid(160, 540, 810)
		this.background = this.add.tileSprite(540, 810, 1080, 1620, 'background')
		this.code_area = document.getElementById('code_area')
		this.button = document.getElementById('run_button')
		this.tutorial_heading = document.getElementById('tutorial_heading')
		this.tutorial_p = document.getElementById('tutorial_p')

		this.player = new Player(this, 0, 0, this.game_grid, 'cat')
		this.player.setScale(0.8)
		this.player.setDepth(1)

		this.level_display = this.add.text(16, 16, '', { fontSize: '100px', fill: '#000' })
		this.perfect = true

		this.level_sprites = []
		this.setLevel(0)
	}

	update() {
		const lines = this.code_area.value.split('\n')

		// Remove the last line until the last line is not empty
		while (lines.length > 0 && lines[lines.length - 1].trim() == "") {
			lines.pop()
		}

		this.under_max_lines = lines.length <= this.max_lines

		this.button.style.background = this.under_max_lines ? "#2c2" : "#f0cb03"
	}

	updateLevelDisplay(level_index) {
		this.level_display.setText(`${this.perfect ? '★ ' : ''}Level ${level_index + 1}`)
		this.tutorial_heading.textContent = `Level ${level_index + 1}`
	}

	setLevel(level_index) {
		this.code_area.value = ""

		fetch('levels.txt')
			.then(r => r.text())
			.then(text => {
				this.loadLevel(text, level_index)
			})
	}

	loadLevel(levels_string, level_index) {
		this.level = levels_string
			.split("§")[1]
			.trim()
			.split(/\n\s*\n/)[level_index]

		for (const sprite of this.level_sprites) {
			sprite.destroy()
		}

		this.level_sprites = []

		// win
		if (this.level == undefined) {
			if (this.perfect) {
				this.background.setTexture('win')
				this.level_display.setText('DU ÄR BÄST!!!\n★★★★★★★')
			} else {
				this.level_display.setText('Du vann :)')
			}
			return
		} else {
			this.level_index = level_index
			this.updateLevelDisplay(level_index)

			this.max_lines = this.level.split('\n')[0]
			this.tutorial_p.innerHTML = this.level.split('\n')[1]

			this.level_array = this.level
				.trim()
				.split('\n')
				.slice(2)
				.map(row => row
					.split(''))
		}

		// width is length of first row
		const width = this.level_array[0].length
		// height is number of rows
		const height = this.level_array.length

		// I have no idea why -1/2 makes it centered but it does
		const x_offset = width / 2 - 1/2
		const y_offset = height / 2 - 1/2

		this.game_grid.origin_x = this.game_grid.base_origin_x - x_offset * this.game_grid.cell_size
		this.game_grid.origin_y = this.game_grid.base_origin_y - y_offset * this.game_grid.cell_size

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const textures = {
					X: 'tile',
					A: 'start',
					B: 'end',
				}

				let texture = textures[this.level_array[y][x]]
				this.level_sprites.push(new GridObject(this, x, y, this.game_grid, texture))

				if (texture == 'start') {
					this.start_tile = {x: x, y: y}

					this.reset_player()
				}
			}
		}

		this.align_line()
	}

	align_line() {
		let line = document.getElementById("line")
		let tutorial = document.getElementById("tutorial")
		let top = parseInt(tutorial.offsetHeight) + 29 + this.max_lines * 60
		line.style.top = top + "px"

		line.style.width = this.code_area.offsetWidth - 40 + "px"
	}

	reset_player() {
		this.player.grid_x = this.start_tile.x
		this.player.grid_y = this.start_tile.y
	}

	async runProgram() {
		if (!this.under_max_lines) {
			this.perfect = false
			this.updateLevelDisplay(this.level_index)
		}

		let code_area_text = this.code_area.value
		await this.execute(code_area_text.split('\n'))
		this.reset_player()
	}

	async execute(lines) {
		for (let line_index = 0; line_index < lines.length; line_index++) {
			const line = lines[line_index].toLowerCase().trim()

			const directions = {
				upp: { x: 0, y: -1 },
				höger: { x: 1, y: 0 },
				ner: { x: 0, y: 1 },
				vänster: { x: -1, y: 0 }
			}

			const move_vector = directions[line.toLowerCase()]

			// move_vector is falsy if input not in directions keys
			if (move_vector) {
				await this.player.move(move_vector.x, move_vector.y)
				let collision_return = this.player.collide() 
				if (collision_return == -1) { // in water
					return -1
				} else if (collision_return == 1) { // on goal
					this.setLevel(this.level_index + 1)
					break // ?
				}
			}

			if (line.split(' ')[1] == 'gånger') {
				// find all commands within the loop
				let loop_lines = []
				let i = 1
				while (lines[line_index+i]?.startsWith('-')) {
					loop_lines.push(lines[line_index + i].replace('-', ''))
					i++
				}

				// run them 'times' times
				const times = parseInt(line.split(' ')[0])
				let loop = Array.from({ length: times }, () => loop_lines).flat() // from ChatGPT
				// return if the loop ends with a collision
				let loop_result = await this.execute(loop)
				if (loop_result == -1) return;
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



// You can write more code here

/* START OF COMPILED CODE */

class Movement extends EventComponent {
	
	constructor(gameObject) {
		super(gameObject);
		
		this.gameObject = gameObject;
		gameObject["__Movement"] = this;
		
		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene;

		this.player = this.gameObject;
		// Get the Cursor Keys
		this.cursors = scene.input.keyboard.createCursorKeys();
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Movement} */
	static getComponent(gameObject) {
		return gameObject["__Movement"];
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	
	/* START-USER-CODE */
	start() {
		this.gameObject.scene.physics.add.existing(this.gameObject);

		/** @type {Phaser.Physics.Arcade.Body} */
		const body = this.gameObject.body;
		body.setGravityY(9000);
		this.jumpSound = this.scene.sound.add('jump')
		
		this.deadSound = this.scene.sound.add('life lost sound')
	}
	
	update() {
		console.log("HI")
		const speed = 400
		/** @type {Phaser.Physics.Arcade.Sprite} */
		const body = this.player.body

		if(!body) return;

		if (this.cursors.up.isDown && body.onFloor())
		{
				body.velocity.y = -1700;
				this.player.play('Jump', true)
				this.jumpSound.play()
		}

		if (this.cursors.left.isDown)
		{
			body.velocity.x = -speed
			this.player.flipX = true;
			this.player.play('Run', true)
		}
		else if (this.cursors.right.isDown)
		{
			body.velocity.x = speed
			this.player.flipX = false
			this.player.play('Run', true)
		}
		else
		{
			if (!this.cursors.up.isDown){
				body.setVelocity(0, 0)
				this.player.play('Idle')
			}
		}
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

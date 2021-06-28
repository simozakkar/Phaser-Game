
// You can write more code here

/* START OF COMPILED CODE */

class Physics {
	
	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Physics"] = this;
		
		/* START-USER-CTR-CODE */
		this.start();
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Physics} */
	static getComponent(gameObject) {
		return gameObject["__Physics"];
	}
	
	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	
	/* START-USER-CODE */

	start() {

		this.gameObject.scene.physics.add.existing(this.gameObject);

		/** @type {Phaser.Physics.Arcade.Body} */
		const body = this.gameObject.body;
		body.setGravityY(9000);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

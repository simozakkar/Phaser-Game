
// You can write more code here

/* START OF COMPILED CODE */

class PhysicsBridges {
	
	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PhysicsBridges"] = this;
		
		/* START-USER-CTR-CODE */
		this.gameObject.scene.physics.add.existing(this.gameObject);

		/** @type {Phaser.Physics.Arcade.Body} */
		const body = this.gameObject.body;
		body.setImmovable();
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {PhysicsBridges} */
	static getComponent(gameObject) {
		return gameObject["__PhysicsBridges"];
	}
	
	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

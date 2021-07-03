
// You can write more code here

/* START OF COMPILED CODE */

class bridgeVerticalPrefab extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "__DEFAULT", frame);
		
		// this (components)
		new PhysicsBridges(this);
		
		/* START-USER-CTR-CODE */

		/** @type {Phaser.GameObjects.Sprite} */
		this.player
		// each time the scene is updated, call the `update` method
        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.initY = y;
		this.step = 5;
		/* END-USER-CTR-CODE */
	}
	
	/** @type {number} */
	dist = 250;
	
	/* START-USER-CODE */

	update(){
		if(this.y > this.initY + this.dist){
			this.step = -Math.abs(this.step);
		}
		if(this.y < this.initY){
			this.step = Math.abs(this.step);
		}
		this.y += this.step;


		if(this.body.touching["up"]) {
			this.player.body.y += this.step
		} 

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

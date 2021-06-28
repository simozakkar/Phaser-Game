
// You can write more code here

/* START OF COMPILED CODE */

class bridgePrefab extends Phaser.GameObjects.Image {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "bridgeLogs", frame);
		
		// this (components)
		new PhysicsBridges(this);
		
		/* START-USER-CTR-CODE */
		// each time the scene is updated, call the `update` method
        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.maxX = 800;
		this.minX = 550;
		this.step = 5;
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	update(){
		if(this.x > this.maxX){
			this.step = -Math.abs(this.step);
		}
		if(this.x < this.minX){
			this.step = Math.abs(this.step);
		}
		this.x += this.step;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

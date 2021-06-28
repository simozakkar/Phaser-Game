
// You can write more code here

/* START OF COMPILED CODE */

class enimesPrafeb extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "flyFly1", frame);
		
		// this (components)
		new PhysicsBridges(this);
		
		/* START-USER-CTR-CODE */
		// each time the scene is updated, call the `update` method
        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.maxX = 800;
		this.minX = 400;
		this.step = 3;
		this.play('flyFly');
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	update(){
		if(this.x > this.maxX){
			this.step = -Math.abs(this.step);
			this.flipX = false;
		}
		if(this.x < this.minX){
			this.step = Math.abs(this.step);
			this.flipX = true;
		}
		this.x += this.step;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

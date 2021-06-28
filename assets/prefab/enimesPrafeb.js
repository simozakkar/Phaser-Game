
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
		this.jumpSound = this.scene.sound.add('jump')
		/* END-USER-CTR-CODE */
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	player = this;
	
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

		if(this.body.touching["up"] || this.body.touching["down"]) {
			this.fly_dead()
		}else if(this.body.touching["left"] || this.body.touching["right"]) {
		}
	}

 	destroy() {
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

	fly_dead(){
		this.destroy()
		this.play('flyDead')
		this.body.setEnable(false);

		this.scene.add.tween({
			targets: this,
			duration: 500,
			scaleX: 0.6,
			scaleY: 0.6,
			angle: 360,
			alpha: 0,
			y: "+=50",
			ease: Phaser.Math.Easing.Linear
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

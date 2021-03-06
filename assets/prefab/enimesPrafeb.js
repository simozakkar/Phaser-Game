
// You can write more code here

/* START OF COMPILED CODE */

class enimesPrafeb extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "__DEFAULT", frame);
		
		// this (components)
		new PhysicsBridges(this);
		
		/* START-USER-CTR-CODE */
		// each time the scene is updated, call the `update` method
        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		this.initX = x;
		this.step = 3;
		this.nameTexture = (texture[0]=='f')? "fly": "slim";
		this.play(this.nameTexture+'Walk');
		this.jumpSound = this.scene.sound.add('jump')
		this.lifLostSound = this.scene.sound.add('life lost sound')

		/** @type {Phaser.GameObjects.Sprite} */
		this.player

		/* END-USER-CTR-CODE */
	}
	
	/** @type {number} */
	dist = 250;
	
	/* START-USER-CODE */

	update(){
		if(this.x >= this.initX + this.dist){
			this.step = -Math.abs(this.step);
			this.flipX = false;
		}
		if(this.x <= this.initX){
			this.step = Math.abs(this.step);
			this.flipX = true;
		}
		this.x += this.step;

		if(this.body.touching["up"] || this.body.touching["down"]) {
			this.fly_dead()
			sessionStorage.setItem("scoreValue", parseInt(sessionStorage.getItem("scoreValue"))+50)
			if(this.body.touching["up"]) this.player.body.velocity.y = -1400

		}else if(this.body.touching["left"] || this.body.touching["right"] || Phaser.Geom.Rectangle.Intersection(this.player.getBounds(), this.getBounds()).x) {

			this.player.setPosition(63,387)
			this.lifLostSound.play()
			
		}
	}

 	destroy() {
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

	fly_dead(){
		this.destroy()
		this.play(this.nameTexture+'Dead')
		this.body.setEnable(false);
		//this.player.body.velocity.y = -1700

		this.scene.add.tween({
			targets: this,
			duration: 800,
			scaleX: 0.6,
			scaleY: 0.6,
			angle: 360,
			alpha: 0,
			y: "+=450",
			ease: Phaser.Math.Easing.Linear
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

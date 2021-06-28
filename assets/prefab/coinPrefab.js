
// You can write more code here

/* START OF COMPILED CODE */

class coinPrefab extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "coinGold", frame);
		
		/* START-USER-CTR-CODE */
		// each time the scene is updated, call the `update` method
        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		scene.physics.add.existing(this);

		this.body.setImmovable();
		this.toucheFirstTime = true
		this.coinSound = this.scene.sound.add('coin')

		this.idleTween = this.scene.tweens.add({
			targets: this,
			scaleX: 0.8,
			scaleY: 0.8,
			angle: "-= 30",
			yoyo: true,
			repeat: -1,
			duration: 1000 + Math.random() * 1000
		});

		this.nameTexture = texture;
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	update(){
		if(!this.body.touching["none"]){
			this.getCoin()
		}	
		console.log('update')
	}
	
	getCoin() {
		this.destroy()
		this.coinSound.play()
		this.taken()
	}

 	destroy() {
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

	taken() {
		
		this.body.setEnable(false);

		this.idleTween.remove();

		this.scene.add.tween({
			targets: this,
			duration: 500,
			scaleX: 0.6,
			scaleY: 0.6,
			angle: 360,
			alpha: 0,
			y: "-=50",
			ease: Phaser.Math.Easing.Linear
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

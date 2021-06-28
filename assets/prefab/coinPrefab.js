
// You can write more code here

/* START OF COMPILED CODE */

class coinPrefab extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "coinGold", frame);
		
		/* START-USER-CTR-CODE */
		// each time the scene is updated, call the `update` method
        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		scene.physics.add.existing(this);
		scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
        this.on(Phaser.GameObjects.Events.DESTROY, this.destroy, this);

		//this.scene.sound.add('music', 'coin.wav')
		/* END-USER-CTR-CODE */
	      
    }

    start() {
        
    }

   

	
	/** @type {Phaser.GameObjects.Sprite} */
	player;
	
	/* START-USER-CODE */

	update(){
		this.y -= 1;
		this.alpha -= 0.01;
		
		this.destroy();
	}

 	destroy() {

        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this);
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class EventComponent {
	
	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__EventComponent"] = this;
		
		/* START-USER-CTR-CODE */
		this.scene = gameObject.scene;        
        
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        gameObject.on(Phaser.GameObjects.Events.DESTROY, this.destroy, this);
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {EventComponent} */
	static getComponent(gameObject) {
		return gameObject["__EventComponent"];
	}
	
	/** @type {} */
	gameObject;
	
	/* START-USER-CODE */

	start() {
        
    }

    destroy() {

        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this);
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    update() {

    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class scorePrefab extends Phaser.GameObjects.Container {
	
	constructor(scene, x, y) {
		super(scene, x, y);
		


		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		// coinScore
		const coinScore = scene.add.image(-355, -82, "coinGold");
		this.add(coinScore);
		
		// score
		const score = scene.add.text(-332, -99, "", {});
		score.text = "0";
		score.setStyle({"color":"#010101ff","fontSize":"32px","fontStyle":"bold"});
		this.add(score);
		
		this.coinScore = coinScore;
		this.score = score;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @type {Phaser.GameObjects.Image} */
	coinScore;
	/** @type {Phaser.GameObjects.Text} */
	score;
	
	/* START-USER-CODE */

	update(){
		this.score.setText(sessionStorage.getItem("scoreValue"))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

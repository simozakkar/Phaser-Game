
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// tiled_Forest_Background
		const tiled_Forest_Background = this.add.image(1, 2, "tiled_Forest Background");
		tiled_Forest_Background.scaleX = 0.7881921681790253;
		tiled_Forest_Background.scaleY = 0.6524423588988446;
		tiled_Forest_Background.setOrigin(0, 0);
		
		// bridge_1
		const bridge_1 = this.add.image(277, 491, "bridge");
		
		// bridge_2
		const bridge_2 = this.add.image(359, 432, "bridge");
		
		// grass
		const grass = this.add.image(858, 411, "Grass");
		
		// cactus
		this.add.image(413, 526, "cactus");
		
		// bush
		this.add.image(112, 525, "bush");
		
		// castleCenter
		const castleCenter = this.add.tileSprite(-161, 359, 70, 70, "castleCenter");
		castleCenter.scaleX = 6.472581856676625;
		castleCenter.scaleY = 6.249982684200267;
		
		// grassHalfMid_1
		const grassHalfMid_1 = this.add.image(209, 556, "grassHalfMid");
		
		// grassHalfMid_2
		const grassHalfMid_2 = this.add.tileSprite(421, 595, 70, 70, "grassHalfMid");
		grassHalfMid_2.scaleX = 11.985926286278405;
		
		// coinGold
		const coinGold = new coinPrefab(this, 440, 326);
		this.add.existing(coinGold);
		
		// coinGold_1
		this.add.image(661, 311, "coinGold");
		
		// coinGold_2
		const coinGold_2 = new coinPrefab(this, 357, 380);
		this.add.existing(coinGold_2);
		
		// coinGold_3
		this.add.image(600, 310, "coinGold");
		
		// coinGold_4
		const coinGold_4 = new coinPrefab(this, 275, 441);
		this.add.existing(coinGold_4);
		
		// player
		const player = this.add.sprite(63, 387, "p1_stand");
		player.setOrigin(0, 0);
		
		// bridge
		const bridge = this.add.image(443, 382, "bridge");
		
		// grassHalfMid
		const grassHalfMid = this.add.image(1812, 598, "grassHalfMid");
		grassHalfMid.scaleX = 27.69972252797321;
		grassHalfMid.scaleY = 0.8964360514885276;
		
		// bridgeLogs
		const bridgeLogs = new bridgePrefab(this, 681, 384);
		this.add.existing(bridgeLogs);
		
		// flyFly1
		const flyFly1 = new enimesPrafeb(this, 767, 306);
		this.add.existing(flyFly1);
		
		// lists
		const items = [grassHalfMid_2, bridge, bridge_2, bridge_1, grassHalfMid_1, grass, castleCenter, grassHalfMid, bridgeLogs, flyFly1]
		
		// bridge_1 (components)
		new PhysicsBridges(bridge_1);
		bridge_1.emit("components-awake");
		
		// bridge_2 (components)
		new PhysicsBridges(bridge_2);
		bridge_2.emit("components-awake");
		
		// grass (components)
		new PhysicsBridges(grass);
		grass.emit("components-awake");
		
		// castleCenter (components)
		new PhysicsBridges(castleCenter);
		castleCenter.emit("components-awake");
		
		// grassHalfMid_1 (components)
		new PhysicsBridges(grassHalfMid_1);
		grassHalfMid_1.emit("components-awake");
		
		// grassHalfMid_2 (components)
		new PhysicsBridges(grassHalfMid_2);
		grassHalfMid_2.emit("components-awake");
		
		// player (components)
		new Physics(player);
		new Movement(player);
		player.emit("components-awake");
		
		// bridge (components)
		new PhysicsBridges(bridge);
		bridge.emit("components-awake");
		
		// grassHalfMid (components)
		new PhysicsBridges(grassHalfMid);
		grassHalfMid.emit("components-awake");
		
		// bridgeLogs (components)
		bridgeLogs.emit("components-awake");
		
		// flyFly1 (components)
		flyFly1.emit("components-awake");
		
		this.tiled_Forest_Background = tiled_Forest_Background;
		this.bridge_1 = bridge_1;
		this.bridge_2 = bridge_2;
		this.grassHalfMid_2 = grassHalfMid_2;
		this.player = player;
		this.bridge = bridge;
		this.bridgeLogs = bridgeLogs;
		this.flyFly1 = flyFly1;
		this.items = items;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	tiled_Forest_Background;
	/** @type {Phaser.GameObjects.Image} */
	bridge_1;
	/** @type {Phaser.GameObjects.Image} */
	bridge_2;
	/** @type {Phaser.GameObjects.TileSprite} */
	grassHalfMid_2;
	/** @type {Phaser.GameObjects.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Image} */
	bridge;
	/** @type {bridgePrefab} */
	bridgeLogs;
	/** @type {enimesPrafeb} */
	flyFly1;
	/** @type {Array<Phaser.GameObjects.TileSprite|Phaser.GameObjects.Image|bridgePrefab|enimesPrafeb>} */
	items;
	
	/* START-USER-CODE */

	// Write your code here.
	
	update(){
		this.tiled_Forest_Background.setScrollFactor(0);
		this.physics.add.collider(this.player, this.items);
		
		this.cameras.main.setBounds(0, 0, 3000, 600);
		this.cameras.main.startFollow(this.player);
			

		if(this.player.x == this.flyFly1.x-36 || this.player.x == this.flyFly1.x+36){
			this.player.x = 0;
			this.player.y = 0;
		}
	}
	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// grass__2_
		this.add.image(1861, 578, "Grass (2)");
		
		// grass__1_
		this.add.image(1940, 574, "Grass (1)");
		
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
		
		// coinGold_4
		const coinGold_4 = new coinPrefab(this, 275, 441);
		this.add.existing(coinGold_4);
		
		// bridge
		const bridge = this.add.image(443, 382, "bridge");
		
		// grassHalfMid
		const grassHalfMid = this.add.image(848, 576, "grassHalfMid");
		grassHalfMid.scaleX = 11.687123869366598;
		grassHalfMid.scaleY = 0.9332738690905618;
		grassHalfMid.setOrigin(0.010243866509496208, 0.2338179430829249);
		
		// coinGold
		const coinGold = new coinPrefab(this, 353, 380);
		this.add.existing(coinGold);
		
		// coinGold_1
		const coinGold_1 = new coinPrefab(this, 446, 318);
		this.add.existing(coinGold_1);
		
		// coinGold_2
		const coinGold_2 = new coinPrefab(this, 696, 287);
		this.add.existing(coinGold_2);
		
		// flyFly1
		const flyFly1 = new enimesPrafeb(this, 524, 318, "flyFly1");
		this.add.existing(flyFly1);
		
		// slimeWalk1
		const slimeWalk1 = new enimesPrafeb(this, 534, 546, "slimeWalk2");
		this.add.existing(slimeWalk1);
		
		// bridgeLogs
		const bridgeLogs = new bridgePrefab(this, 524, 382, "bridgeLogs");
		this.add.existing(bridgeLogs);
		
		// cactus_1
		this.add.image(1005, 532, "cactus");
		
		// bridge_3
		const bridge_3 = this.add.image(1032, 392, "bridge");
		
		// bush_1
		this.add.image(941, 532, "bush");
		
		// bridge_4
		const bridge_4 = this.add.image(1135, 451, "bridge");
		
		// bridge_5
		const bridge_5 = this.add.image(1245, 508, "bridge");
		
		// slimeWalk1_1
		const slimeWalk1_1 = new enimesPrafeb(this, 1015, 552, "slimeWalk2");
		this.add.existing(slimeWalk1_1);
		
		// flyFly2_1
		const flyFly2_1 = new enimesPrafeb(this, 1714, 379, "flyFly1");
		this.add.existing(flyFly2_1);
		
		// score
		const score = this.add.text(64, 29, "", {});
		score.text = "0";
		score.setStyle({"color":"#010101ff","fontSize":"32px","fontStyle":"bold"});
		
		// coinScore
		const coinScore = this.add.image(29, 47, "coinGold");
		
		// coinGold_3
		const coinGold_3 = new coinPrefab(this, 559, 291, "coinGold");
		this.add.existing(coinGold_3);
		
		// coinGold_5
		const coinGold_5 = new coinPrefab(this, 852, 317);
		this.add.existing(coinGold_5);
		
		// coinGold_6
		const coinGold_6 = new coinPrefab(this, 1135, 386);
		this.add.existing(coinGold_6);
		
		// coinGold_7
		const coinGold_7 = new coinPrefab(this, 858, 501);
		this.add.existing(coinGold_7);
		
		// bridge_8
		const bridge_8 = new bridgeVerticalPrefab(this, 936, 390, "bridge");
		this.add.existing(bridge_8);
		
		// bush_2
		this.add.image(1241, 530, "bush");
		
		// cactus_2
		this.add.image(2536, 528, "cactus");
		
		// brickWall
		const brickWall = this.add.image(1622, 527, "brickWall");
		
		// brickWall_2
		const brickWall_2 = this.add.image(1996, 523, "brickWall");
		
		// grass_1
		const grass_1 = this.add.image(1553, 526, "Grass");
		
		// grass_2
		const grass_2 = this.add.image(1620, 457, "Grass");
		
		// cactus_3
		this.add.image(2181, 539, "cactus");
		
		// grass_3
		const grass_3 = this.add.image(2068, 524, "Grass");
		
		// grass_4
		const grass_4 = this.add.image(1996, 452, "Grass");
		
		// grassHalfMid_3
		const grassHalfMid_3 = this.add.image(2305, 592, "grassHalfMid");
		grassHalfMid_3.scaleX = 9.813318706969643;
		grassHalfMid_3.scaleY = 0.917662037774685;
		
		// coinGold_8
		const coinGold_8 = new coinPrefab(this, 2254, 485);
		this.add.existing(coinGold_8);
		
		// coinGold_9
		const coinGold_9 = new coinPrefab(this, 1397, 494);
		this.add.existing(coinGold_9);
		
		// coinGold_10
		const coinGold_10 = new coinPrefab(this, 1820, 289);
		this.add.existing(coinGold_10);
		
		// signArrow
		this.add.image(2344, 525, "SignArrow");
		
		// grassHalfMid_4
		const grassHalfMid_4 = this.add.image(1814, 595, "grassHalfMid");
		
		// grass_5
		const grass_5 = this.add.image(1813, 452, "Grass");
		
		// brickWall_1
		const brickWall_1 = this.add.image(1813, 524, "brickWall");
		
		// cactus__1_
		const cactus__1_ = this.add.image(1681, 564, "Cactus (1)");
		cactus__1_.scaleX = 0.6163116714685017;
		cactus__1_.scaleY = 0.6961378259056439;
		
		// cactus__3_
		this.add.image(1901, 552, "Cactus (3)");
		
		// cactus__2_
		this.add.image(1737, 579, "Cactus (2)");
		
		// skeleton
		const skeleton = this.add.image(1746, 584, "Skeleton");
		skeleton.scaleX = 0.44512116820257575;
		skeleton.scaleY = 0.7087310378170053;
		
		// player
		const player = this.add.sprite(63, 387, "p1_stand");
		player.setOrigin(0, 0);
		
		// lists
		const items = [grassHalfMid_2, bridge, bridge_2, bridge_1, grassHalfMid_1, grass, castleCenter, grassHalfMid, flyFly1, slimeWalk1, bridgeLogs, bridge_3, bridge_4, bridge_5, flyFly2_1, bridge_8, slimeWalk1_1, grass_1, grass_2, brickWall, grass_4, grass_3, brickWall_2, grassHalfMid_3, grass_5, brickWall_1, grassHalfMid_4]
		const coins = [coinGold_4, coinGold, coinGold_1, coinGold_2, coinGold_3, coinGold_7, coinGold_5, coinGold_10, coinGold_9, coinGold_8, coinGold_6]
		const bridges = [bridge_8, bridgeLogs]
		const enimes = [flyFly1, slimeWalk1, slimeWalk1_1, flyFly2_1]
		
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
		
		// coinGold_4 (components)
		coinGold_4.emit("components-awake");
		
		// bridge (components)
		new PhysicsBridges(bridge);
		bridge.emit("components-awake");
		
		// grassHalfMid (components)
		new PhysicsBridges(grassHalfMid);
		grassHalfMid.emit("components-awake");
		
		// coinGold (components)
		coinGold.emit("components-awake");
		
		// coinGold_1 (components)
		coinGold_1.emit("components-awake");
		
		// coinGold_2 (components)
		coinGold_2.emit("components-awake");
		
		// flyFly1 (prefab fields)
		flyFly1.dist = 260;
		
		// flyFly1 (components)
		flyFly1.emit("components-awake");
		
		// slimeWalk1 (components)
		slimeWalk1.emit("components-awake");
		
		// bridgeLogs (prefab fields)
		bridgeLogs.dist = 240;
		
		// bridgeLogs (components)
		bridgeLogs.emit("components-awake");
		
		// bridge_3 (components)
		new PhysicsBridges(bridge_3);
		bridge_3.emit("components-awake");
		
		// bridge_4 (components)
		new PhysicsBridges(bridge_4);
		bridge_4.emit("components-awake");
		
		// bridge_5 (components)
		new PhysicsBridges(bridge_5);
		bridge_5.emit("components-awake");
		
		// slimeWalk1_1 (components)
		slimeWalk1_1.emit("components-awake");
		
		// flyFly2_1 (components)
		flyFly2_1.emit("components-awake");
		
		// coinGold_3 (components)
		coinGold_3.emit("components-awake");
		
		// coinGold_5 (components)
		coinGold_5.emit("components-awake");
		
		// coinGold_6 (components)
		coinGold_6.emit("components-awake");
		
		// coinGold_7 (components)
		coinGold_7.emit("components-awake");
		
		// bridge_8 (prefab fields)
		bridge_8.dist = 190;
		
		// bridge_8 (components)
		bridge_8.emit("components-awake");
		
		// brickWall (components)
		new PhysicsBridges(brickWall);
		brickWall.emit("components-awake");
		
		// brickWall_2 (components)
		new PhysicsBridges(brickWall_2);
		brickWall_2.emit("components-awake");
		
		// grass_1 (components)
		new PhysicsBridges(grass_1);
		grass_1.emit("components-awake");
		
		// grass_2 (components)
		new PhysicsBridges(grass_2);
		grass_2.emit("components-awake");
		
		// grass_3 (components)
		new PhysicsBridges(grass_3);
		grass_3.emit("components-awake");
		
		// grass_4 (components)
		new PhysicsBridges(grass_4);
		grass_4.emit("components-awake");
		
		// grassHalfMid_3 (components)
		new PhysicsBridges(grassHalfMid_3);
		grassHalfMid_3.emit("components-awake");
		
		// coinGold_8 (components)
		coinGold_8.emit("components-awake");
		
		// coinGold_9 (components)
		coinGold_9.emit("components-awake");
		
		// coinGold_10 (components)
		coinGold_10.emit("components-awake");
		
		// grassHalfMid_4 (components)
		new PhysicsBridges(grassHalfMid_4);
		grassHalfMid_4.emit("components-awake");
		
		// grass_5 (components)
		new PhysicsBridges(grass_5);
		grass_5.emit("components-awake");
		
		// brickWall_1 (components)
		new PhysicsBridges(brickWall_1);
		brickWall_1.emit("components-awake");
		
		// player (components)
		new Physics(player);
		new Movement(player);
		player.emit("components-awake");
		
		this.tiled_Forest_Background = tiled_Forest_Background;
		this.bridge_1 = bridge_1;
		this.bridge_2 = bridge_2;
		this.grassHalfMid_2 = grassHalfMid_2;
		this.coinGold_4 = coinGold_4;
		this.bridge = bridge;
		this.coinGold = coinGold;
		this.coinGold_1 = coinGold_1;
		this.coinGold_2 = coinGold_2;
		this.flyFly1 = flyFly1;
		this.slimeWalk1 = slimeWalk1;
		this.bridgeLogs = bridgeLogs;
		this.slimeWalk1_1 = slimeWalk1_1;
		this.flyFly2_1 = flyFly2_1;
		this.score = score;
		this.coinScore = coinScore;
		this.coinGold_3 = coinGold_3;
		this.coinGold_5 = coinGold_5;
		this.coinGold_6 = coinGold_6;
		this.coinGold_7 = coinGold_7;
		this.bridge_8 = bridge_8;
		this.coinGold_8 = coinGold_8;
		this.coinGold_9 = coinGold_9;
		this.coinGold_10 = coinGold_10;
		this.grassHalfMid_4 = grassHalfMid_4;
		this.player = player;
		this.items = items;
		this.coins = coins;
		this.bridges = bridges;
		this.enimes = enimes;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	tiled_Forest_Background;
	/** @type {Phaser.GameObjects.Image} */
	bridge_1;
	/** @type {Phaser.GameObjects.Image} */
	bridge_2;
	/** @type {Phaser.GameObjects.TileSprite} */
	grassHalfMid_2;
	/** @type {coinPrefab} */
	coinGold_4;
	/** @type {Phaser.GameObjects.Image} */
	bridge;
	/** @type {coinPrefab} */
	coinGold;
	/** @type {coinPrefab} */
	coinGold_1;
	/** @type {coinPrefab} */
	coinGold_2;
	/** @type {enimesPrafeb} */
	flyFly1;
	/** @type {enimesPrafeb} */
	slimeWalk1;
	/** @type {bridgePrefab} */
	bridgeLogs;
	/** @type {enimesPrafeb} */
	slimeWalk1_1;
	/** @type {enimesPrafeb} */
	flyFly2_1;
	/** @type {Phaser.GameObjects.Text} */
	score;
	/** @type {Phaser.GameObjects.Image} */
	coinScore;
	/** @type {coinPrefab} */
	coinGold_3;
	/** @type {coinPrefab} */
	coinGold_5;
	/** @type {coinPrefab} */
	coinGold_6;
	/** @type {coinPrefab} */
	coinGold_7;
	/** @type {bridgeVerticalPrefab} */
	bridge_8;
	/** @type {coinPrefab} */
	coinGold_8;
	/** @type {coinPrefab} */
	coinGold_9;
	/** @type {coinPrefab} */
	coinGold_10;
	/** @type {Phaser.GameObjects.Image} */
	grassHalfMid_4;
	/** @type {Phaser.GameObjects.Sprite} */
	player;
	/** @type {Array<Phaser.GameObjects.TileSprite|Phaser.GameObjects.Image|enimesPrafeb|bridgePrefab|bridgeVerticalPrefab>} */
	items;
	/** @type {coinPrefab[]} */
	coins;
	/** @type {Array<bridgeVerticalPrefab|bridgePrefab>} */
	bridges;
	/** @type {enimesPrafeb[]} */
	enimes;
	
	/* START-USER-CODE */

	// Write your code here.
	create(){

		this.editorCreate()
		
		for(let i=0; i<this.coins.length; i++) 
			this.coins[i].player = this.player

		for(let i=0; i<this.enimes.length; i++) 
			this.enimes[i].player = this.player

		for(let i=0; i<this.bridges.length; i++) 
			this.bridges[i].player = this.player

		this.tiled_Forest_Background.setScrollFactor(0);
		this.coinScore.setScrollFactor(0);
		this.score.setScrollFactor(0);
		this.physics.add.collider(this.player, this.items);
		this.physics.add.collider(this.player, this.coins);
		
		this.cameras.main.setBounds(0, 0, 3000, 600);
		this.cameras.main.startFollow(this.player);

		this.lifLostSound = this.sound.add('life lost sound')
		this.winSound = this.sound.add('smb_stage_clear')
	}
	
	update() {
		this.score.setText(sessionStorage.getItem("scoreValue"))


		if(this.player.x > 2340){
			this.winSound.play()
			this.scene.start("MiramarLevel")
		} 
		if(this.player.y > 550) {
			this.player.setPosition(63,387)
			this.lifLostSound.play()
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

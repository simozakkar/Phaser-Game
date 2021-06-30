
// You can write more code here

/* START OF COMPILED CODE */

class MiramarLevel extends Phaser.Scene {
	
	constructor() {
		super("MiramarLevel");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// coinGold
		this.add.image(495, 75, "coinGold");
		
		// bG
		const bG = this.add.image(0, 0, "BG");
		bG.scaleX = 0.6229967391704219;
		bG.scaleY = 0.6400737345025433;
		bG.setOrigin(0, 0);
		
		// player
		const player = this.add.sprite(104, 450, "p1_stand");
		
		// stoneBlock
		const stoneBlock = this.add.image(-215, 431, "StoneBlock");
		stoneBlock.scaleX = 5.332885342520114;
		stoneBlock.scaleY = 4.794804553279632;
		
		// tileGround
		const tileGround = this.add.tileSprite(48.02935894185088, 555.2486410120467, 3000, 93, "15");
		tileGround.scaleY = 0.6102646855589325;
		tileGround.setOrigin(0.00022936673321000134, 0.02864873105847427);
		
		// crate_5_1_1_1
		const crate_5_1_1_1 = this.add.image(663, 501, "Crate");
		
		// bridge
		const bridge = new bridgeVerticalPrefab(this, 370, 278, "bridge");
		this.add.existing(bridge);
		
		// flyFly1
		const flyFly1 = new enimesPrafeb(this, 465, 267, "flyFly1");
		this.add.existing(flyFly1);
		
		// container
		const container = new scorePrefab(this, 416, 133);
		this.add.existing(container);
		
		// slimeWalk2
		const slimeWalk2 = new enimesPrafeb(this, 833, 410, "slimeWalk2");
		this.add.existing(slimeWalk2);
		
		// slimeWalk2_1
		const slimeWalk2_1 = new enimesPrafeb(this, 1240, 542, "slimeWalk2");
		this.add.existing(slimeWalk2_1);
		
		// slimeWalk2_2
		const slimeWalk2_2 = new enimesPrafeb(this, 2065, 544, "slimeWalk2");
		this.add.existing(slimeWalk2_2);
		
		// skeleton
		this.add.image(937, 530, "Skeleton");
		
		// grass__2_
		this.add.image(1558, 530, "Grass (2)");
		
		// cactus__3_
		this.add.image(2909, 514, "Cactus (3)");
		
		// cactus__1_
		this.add.image(1034, 520, "Cactus (1)");
		
		// ground2
		const ground2 = this.add.image(779, 488, "2");
		
		// brickWall
		const brickWall = this.add.image(950, 458, "brickWall");
		
		// tree
		this.add.image(1487, 432, "Tree");
		
		// signArrow
		this.add.image(2718, 517, "SignArrow");
		
		// crate_5
		const crate_5 = this.add.image(459, 400, "Crate");
		
		// cactus__2_
		this.add.image(717, 534, "Cactus (2)");
		
		// coinGold_3
		const coinGold_3 = new coinPrefab(this, 639, 284);
		this.add.existing(coinGold_3);
		
		// brickWall_1
		const brickWall_1 = this.add.image(880, 458, "brickWall");
		
		// ground2_1
		const ground2_1 = this.add.image(1124, 489, "2");
		
		// bridgeLogs
		const bridgeLogs = this.add.image(1023, 434, "bridgeLogs");
		
		// coinGold_4
		const coinGold_4 = new coinPrefab(this, 2234, 491);
		this.add.existing(coinGold_4);
		
		// coinGold_5
		const coinGold_5 = new coinPrefab(this, 978, 327);
		this.add.existing(coinGold_5);
		
		// coinGold_6
		const coinGold_6 = new coinPrefab(this, 1076, 360);
		this.add.existing(coinGold_6);
		
		// coinGold_7
		const coinGold_7 = new coinPrefab(this, 1984, 492);
		this.add.existing(coinGold_7);
		
		// coinGold_8
		const coinGold_8 = new coinPrefab(this, 1737, 488);
		this.add.existing(coinGold_8);
		
		// coinGold_9
		const coinGold_9 = new coinPrefab(this, 882, 363);
		this.add.existing(coinGold_9);
		
		// bridge_1
		const bridge_1 = this.add.image(1225, 503, "bridge");
		
		// coinGold_3_1
		const coinGold_3_1 = new coinPrefab(this, 466, 284);
		this.add.existing(coinGold_3_1);
		
		// coinGold_3_1_1
		const coinGold_3_1_1 = new coinPrefab(this, 552, 286);
		this.add.existing(coinGold_3_1_1);
		
		// crate_5_1
		const crate_5_1 = this.add.image(459, 501, "Crate");
		
		// crate_5_1_1
		const crate_5_1_1 = this.add.image(561, 501, "Crate");
		
		// crate_5_1_1_2
		const crate_5_1_1_2 = this.add.image(561, 400, "Crate");
		
		// crate_5_1_1_3
		const crate_5_1_1_3 = this.add.image(663, 399, "Crate");
		
		// lists
		const items = [tileGround, ground2_1, bridge_1, bridgeLogs, brickWall, brickWall_1, ground2, crate_5, crate_5_1, crate_5_1_1_1, crate_5_1_1, crate_5_1_1_2, crate_5_1_1_3, bridge, flyFly1, slimeWalk2, slimeWalk2_1, slimeWalk2_2, stoneBlock]
		const coins = [coinGold_4, coinGold_8, coinGold_7, coinGold_6, coinGold_5, coinGold_9, coinGold_3, coinGold_3_1, coinGold_3_1_1]
		const bridges = [bridge]
		const enimes = [flyFly1, slimeWalk2_2, slimeWalk2, slimeWalk2_1]
		
		// player (components)
		new Movement(player);
		player.emit("components-awake");
		
		// stoneBlock (components)
		new PhysicsBridges(stoneBlock);
		stoneBlock.emit("components-awake");
		
		// tileGround (components)
		new PhysicsBridges(tileGround);
		tileGround.emit("components-awake");
		
		// crate_5_1_1_1 (components)
		new PhysicsBridges(crate_5_1_1_1);
		crate_5_1_1_1.emit("components-awake");
		
		// bridge (components)
		bridge.emit("components-awake");
		
		// flyFly1 (components)
		flyFly1.emit("components-awake");
		
		// slimeWalk2 (components)
		slimeWalk2.emit("components-awake");
		
		// slimeWalk2_1 (components)
		slimeWalk2_1.emit("components-awake");
		
		// slimeWalk2_2 (components)
		slimeWalk2_2.emit("components-awake");
		
		// ground2 (components)
		new PhysicsBridges(ground2);
		ground2.emit("components-awake");
		
		// brickWall (components)
		new PhysicsBridges(brickWall);
		brickWall.emit("components-awake");
		
		// crate_5 (components)
		new PhysicsBridges(crate_5);
		crate_5.emit("components-awake");
		
		// coinGold_3 (components)
		coinGold_3.emit("components-awake");
		
		// brickWall_1 (components)
		new PhysicsBridges(brickWall_1);
		brickWall_1.emit("components-awake");
		
		// ground2_1 (components)
		new PhysicsBridges(ground2_1);
		ground2_1.emit("components-awake");
		
		// bridgeLogs (components)
		new PhysicsBridges(bridgeLogs);
		bridgeLogs.emit("components-awake");
		
		// coinGold_4 (components)
		coinGold_4.emit("components-awake");
		
		// coinGold_5 (components)
		coinGold_5.emit("components-awake");
		
		// coinGold_6 (components)
		coinGold_6.emit("components-awake");
		
		// coinGold_7 (components)
		coinGold_7.emit("components-awake");
		
		// coinGold_8 (components)
		coinGold_8.emit("components-awake");
		
		// coinGold_9 (components)
		coinGold_9.emit("components-awake");
		
		// bridge_1 (components)
		new PhysicsBridges(bridge_1);
		bridge_1.emit("components-awake");
		
		// coinGold_3_1 (components)
		coinGold_3_1.emit("components-awake");
		
		// coinGold_3_1_1 (components)
		coinGold_3_1_1.emit("components-awake");
		
		// crate_5_1 (components)
		new PhysicsBridges(crate_5_1);
		crate_5_1.emit("components-awake");
		
		// crate_5_1_1 (components)
		new PhysicsBridges(crate_5_1_1);
		crate_5_1_1.emit("components-awake");
		
		// crate_5_1_1_2 (components)
		new PhysicsBridges(crate_5_1_1_2);
		crate_5_1_1_2.emit("components-awake");
		
		// crate_5_1_1_3 (components)
		new PhysicsBridges(crate_5_1_1_3);
		crate_5_1_1_3.emit("components-awake");
		
		this.bG = bG;
		this.player = player;
		this.tileGround = tileGround;
		this.crate_5_1_1_1 = crate_5_1_1_1;
		this.bridge = bridge;
		this.flyFly1 = flyFly1;
		this.container = container;
		this.slimeWalk2 = slimeWalk2;
		this.slimeWalk2_1 = slimeWalk2_1;
		this.slimeWalk2_2 = slimeWalk2_2;
		this.ground2 = ground2;
		this.brickWall = brickWall;
		this.crate_5 = crate_5;
		this.coinGold_3 = coinGold_3;
		this.brickWall_1 = brickWall_1;
		this.ground2_1 = ground2_1;
		this.bridgeLogs = bridgeLogs;
		this.coinGold_4 = coinGold_4;
		this.coinGold_5 = coinGold_5;
		this.coinGold_6 = coinGold_6;
		this.coinGold_7 = coinGold_7;
		this.coinGold_8 = coinGold_8;
		this.coinGold_9 = coinGold_9;
		this.bridge_1 = bridge_1;
		this.coinGold_3_1 = coinGold_3_1;
		this.coinGold_3_1_1 = coinGold_3_1_1;
		this.crate_5_1 = crate_5_1;
		this.crate_5_1_1 = crate_5_1_1;
		this.crate_5_1_1_2 = crate_5_1_1_2;
		this.crate_5_1_1_3 = crate_5_1_1_3;
		this.items = items;
		this.coins = coins;
		this.bridges = bridges;
		this.enimes = enimes;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	bG;
	/** @type {Phaser.GameObjects.Sprite} */
	player;
	/** @type {Phaser.GameObjects.TileSprite} */
	tileGround;
	/** @type {Phaser.GameObjects.Image} */
	crate_5_1_1_1;
	/** @type {bridgeVerticalPrefab} */
	bridge;
	/** @type {enimesPrafeb} */
	flyFly1;
	/** @type {scorePrefab} */
	container;
	/** @type {enimesPrafeb} */
	slimeWalk2;
	/** @type {enimesPrafeb} */
	slimeWalk2_1;
	/** @type {enimesPrafeb} */
	slimeWalk2_2;
	/** @type {Phaser.GameObjects.Image} */
	ground2;
	/** @type {Phaser.GameObjects.Image} */
	brickWall;
	/** @type {Phaser.GameObjects.Image} */
	crate_5;
	/** @type {coinPrefab} */
	coinGold_3;
	/** @type {Phaser.GameObjects.Image} */
	brickWall_1;
	/** @type {Phaser.GameObjects.Image} */
	ground2_1;
	/** @type {Phaser.GameObjects.Image} */
	bridgeLogs;
	/** @type {coinPrefab} */
	coinGold_4;
	/** @type {coinPrefab} */
	coinGold_5;
	/** @type {coinPrefab} */
	coinGold_6;
	/** @type {coinPrefab} */
	coinGold_7;
	/** @type {coinPrefab} */
	coinGold_8;
	/** @type {coinPrefab} */
	coinGold_9;
	/** @type {Phaser.GameObjects.Image} */
	bridge_1;
	/** @type {coinPrefab} */
	coinGold_3_1;
	/** @type {coinPrefab} */
	coinGold_3_1_1;
	/** @type {Phaser.GameObjects.Image} */
	crate_5_1;
	/** @type {Phaser.GameObjects.Image} */
	crate_5_1_1;
	/** @type {Phaser.GameObjects.Image} */
	crate_5_1_1_2;
	/** @type {Phaser.GameObjects.Image} */
	crate_5_1_1_3;
	/** @type {Array<Phaser.GameObjects.TileSprite|Phaser.GameObjects.Image|bridgeVerticalPrefab|enimesPrafeb>} */
	items;
	/** @type {coinPrefab[]} */
	coins;
	/** @type {bridgeVerticalPrefab[]} */
	bridges;
	/** @type {enimesPrafeb[]} */
	enimes;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create(){

		this.editorCreate()
		
		for(let i=0; i<this.coins.length; i++) 
			this.coins[i].player = this.player

		for(let i=0; i<this.enimes.length; i++) 
			this.enimes[i].player = this.player

		for(let i=0; i<this.bridges.length; i++) 
			this.bridges[i].player = this.player

		this.bG.setScrollFactor(0);
		this.container.setScrollFactor(0);
		this.physics.add.collider(this.player, this.items);
		this.physics.add.collider(this.player, this.coins);
		
		this.cameras.main.setBounds(0, 0, 3000, 600);
		this.cameras.main.startFollow(this.player);

		this.lifLostSound = this.sound.add('life lost sound')
		this.winSound = this.sound.add('smb_stage_clear')
	}
	
	update() {

		if(this.player.x > 2740){
			this.scene.start("Level")
			this.winSound.play()
			//this.scene.start("LevelXXXX")
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

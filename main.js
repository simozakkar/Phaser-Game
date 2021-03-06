
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: false				
			}			
		},
	});
	
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		if(sessionStorage.getItem("scoreValue") == null){
			sessionStorage.setItem("scoreValue", "0");
		}
			
		this.scene.start("Level");
	}

}
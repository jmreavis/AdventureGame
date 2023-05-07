class Cell extends AdventureScene {
    constructor() {
        super("cell", "Dingy Cell");
    }

    preload() {
        this.load.image("cell", "/assets/prison_cell.png");
    }

    onEnter() {
        let background = this.add.sprite(715, 540,  "cell");
        background.setScale(1.155);

        let wallHitbox = this.add.text(625, 150, " ")
            .setScale(20)
            .setInteractive()
            .on('pointerover', () => {
                if(this.hasItem('bricks')) {
                    this.showMessage("A couple blows from these bricks should bring the rest of it down")
                } else {
                    this.showMessage("The wall is beginning to crumble")
                }
            })
            .on('pointerdown', () => {
                if(this.hasItem('bricks')) {
                    this.showMessage("The wall came down. A faint glint pierces through the settling dust... ")
                    this.loseItem('bricks')
                    this.spriteRemove(brick)
                    this.gotoScene("secret")
                } else {
                    this.showMessage("I can't bust through this with just my bare hands...")
                }
            });
            

        let doorHitBox = this.add.text(100, 200, "*")
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Locked tight. I need to find a way out, and fast."))
            .on('pointerdown', () => this.showMessage("It's locked."))
        

        let key = this.add.text(0, 0, "🔑")
            .setScale(0)

        let brick = this.add.text(1200, 1000, "🧱")
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.emphasizeItem(brick))
            .on('pointerover', () => this.showMessage("There's a brick on the ground next to this bucket. Could be useful."))
            .on('pointerout', () => this.deEmphasizeItem(brick))
            .on('pointerdown', () => {
                this.showMessage("Bricks collected")
                this.gainItem('bricks')
                this.spriteRemove(brick)
            });
            
}
}

class Secret extends AdventureScene {
    constructor() {
        super("secret", "Secret Chamber")
    }

    onEnter() {
        this.add.text(10, 10, "To be continued...").setFontSize(50);
    }
}

class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerover', () => this.emphasizeItem(clip))
            .on('pointerout', () => this.deEmphasizeItem(clip))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.spriteRemove(key);
                // this.tweens.add({
                //     targets: key,
                //     y: `-=${2 * this.s}`,
                //     alpha: { from: 1, to: 0 },
                //     duration: 500,
                //     onComplete: () => key.destroy()
                // });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Where am I...?").setFontSize(25);
        this.add.text(50,100, "Fine dust fills the air as I stir, like a crypt being disturbed").setFontSize(20);
        this.add.text(750,300, "Entombed").setFontSize(60);
        this.add.text(800, 375, "Click to Begin").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('cell'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    //scene: [Intro, Demo1, Demo2, Outro],
    scene: [Cell, Secret],
    title: "Adventure Game",
});


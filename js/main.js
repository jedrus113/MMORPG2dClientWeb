var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },

    preload: function ()
    {
        // load resources
        this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
        this.load.image('dragonblue', 'assets/dragonblue.png');
        this.load.image('dragonorrange', 'assets/dragonorrange.png');
    },

    create: function ()
    {
        this.scene.start('BattleScene');
    }
});

var BattleScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function BattleScene ()
    {
        Phaser.Scene.call(this, { key: 'BattleScene' });
    },
    create: function ()
    {
        // Run UI Scene at the same time
        this.scene.launch('UIScene');
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
    }
});

var UIScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function UIScene ()
    {
        Phaser.Scene.call(this, { key: 'UIScene' });
    },

    create: function ()
    {

    }
});

var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [ BootScene, BattleScene, UIScene ]
};

var game = new Phaser.Game(config);
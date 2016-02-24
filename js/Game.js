
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

/*    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)*/

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

//var map;
    var player;
};
//var map;

BasicGame.Game.prototype = {

    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        //collision = game.add.tilemap('collision',0,0);
        //collision.addTilesetImage('map');
        //layer = map.createLayer(0);
    //  Resize the world
        //layer.resizeWorld();
        var map = this.add.image(0,0,'map');
        //map.setCollisionBetween(54, 83);
        
        //PLAYER STUFF
        player = this.add.sprite(48, 48, 'player', 1);
        player.animations.add('left', [8,9], 10, true);
        player.animations.add('right', [1,2], 10, true);
        player.animations.add('up', [11,12,13], 10, true);
        player.animations.add('down', [4,5,6], 10, true);

        this.physics.enable(player, Phaser.Physics.ARCADE);

        player.body.setSize(10, 14, 2, 1);
        player.body.collideWorldBounds = true;//This for every kind of object we want to hit worldbounds.
        cursors = this.input.keyboard.createCursorKeys();

    var help = this.add.text(16, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
    help.fixedToCamera = true;

    },

    update: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        player.body.velocity.set(0);

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -100;
            player.play('left');
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 100;
            player.play('right');
        }
        else if (cursors.up.isDown)
        {
            player.body.velocity.y = -100;
            player.play('up');
        }
        else if (cursors.down.isDown)
        {
            player.body.velocity.y = 100;
            player.play('down');
        }
        else
        {
            player.animations.stop();
        }

    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};
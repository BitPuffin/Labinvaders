var game = core.global.game = {};
var playership;
var enemy_count = 0;

game.settings = {
	alien_rows : 2,
	alien_down_step : 25,
	alien_speed : 2
}
	
//Called once at the start of the game.
events.connect('onReady', function()
	{
		phoenix.setClearColor( color(0.0, 0.0, 0.0, 1) );
		phoenix.setVSync( true );
		
		modules.use( '.controls', true, true );
		exec( 'ship' );
		exec( 'shot' );
		exec( 'alien' );
		
		playership = new Ship( phoenix.resolution.x/2, phoenix.resolution.y-50 );
		
		addAliens();
		
		events.connect( 'game::win', winner );
		events.connect( 'game::lose', loser );
	}
);

//events.connect('onKeyDown', function(e){ console.log(e); });

//swedish keyboard console fix
events.connect('key::9::down', function()
	{
		events.fire('key::backtick::down', {});
	}
);

//time.schedule ( 2000, true, function(){ console.log('test!') });

//The main loop, update your game here
core.onUpdate = function( dt ){
	if( game.aliens.length <= 0 ) {
		events.fire( 'game::win' );
	}
}

function addAliens() {
	for( y = 50; y <= ( 60 * game.settings.alien_rows ); y+=60 ) {
		for( x = 50; x <= phoenix.resolution.x -210; x+=60 ) {
			new Alien( x, y );
		}
	}
}

function winner() {
	core.echo( 'You win!' );
	core.reload();
}

function loser() {
	core.echo( 'You lose, fuckface!' );
	core.reload();
}

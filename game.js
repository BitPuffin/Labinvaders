var game = core.global.game = {};
var playership;
var enemy_count = 0;
	
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
		
		for( y = 50; y <= 110; y+=60 ) {
			for( x = 50; x <= phoenix.resolution.x -210; x+=60 ) {
				new Alien( x, y );
				enemy_count++;
			}
		}
	}
);

//events.connect('onKeyDown', function(e){ console.log(e); });
//swedish keyboard console fix
events.connect('key::9::down', function()
	{
		events.fire('key::backtick::down', {});
	}
);

time.schedule ( 2000, true, function(){ console.log('test!') });

//The main loop, update your game here
core.onUpdate = function( dt ){
}

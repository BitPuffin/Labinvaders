game.projectiles = [];

var Shot = new Class(
	{
		Extends : Sprite,
		
		initialize : function( position ) {
			position = vec2( position.x, position.y-10 );
			this.parent( 'shot.png', position );
			game.projectiles.push( this );
			this.update_event = events.connect( 'onUpdate', this.update.bind(this) );
			this.bullet_speed = 8;
			audio.playSound( 'fire' );
		},
		
		die : function() {
			events.disconnect(this.update_event);
			game.projectiles.erase( this );
			this.drop();
		},
		
		update : function() {
			this.pos = vec2( this.pos.x, this.pos.y - this.bullet_speed );
			
			if( this.pos.y <= -900 ) {
				this.die();
			}
		}
	}
);

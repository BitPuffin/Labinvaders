var Ship = new Class(
	{
		Extends : Sprite,
		
		initialize : function( x, y ) {
			this.parent( 'ship.png', vec2(x,y) );
			this.update_event = events.connect( 'onUpdate', this.update.bind(this) );
			this.control = new Controller();
			this.ship_speed = 8;
			this.cooldown = false;
			this.cooldown_counter = 30;
			this.fire_rate = 10;
		},
		
		update : function() {
			if ( this.control.left && this.pos.x >= 50 ) {
				this.pos = vec2( this.pos.x - (this.ship_speed ), this.pos.y );
			}
			if ( this.control.right && this.pos.x <= phoenix.resolution.x - 50 ) {
				this.pos = vec2( this.pos.x + (this.ship_speed ), this.pos.y );
			}
			if ( !this.cooldown && this.control.space ) {
				this.fire();
			}
			if( this.cooldown && this.cooldown_counter >= this.fire_rate ) {
				this.cooldown = false;
			}
			this.cooldown_counter++;
			this.checkCollision();
		},
		
		fire : function() {
			new Shot( this.pos );
			console.log("Fire!");
			this.cooldown = true;
			this.cooldown_counter = 0;
		},
		
		checkCollision : function() {
			game.aliens.each( function( alien, alien_index )
				{
					if( this.contains(alien.pos) ) {
						this.die();
					}
				}.bind(this)
			);
		},
		
		die : function() {
			events.disconnect(this.update_event);
			this.drop();
		}
	}
);

/* 
Can also do Ship.implement(
	{
		update : function( dt ) {
		},
		
		fire : function() {
		}
	}
);
*/

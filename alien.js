var alien_direction = 1;

function flipDirection() {
	alien_direction = -alien_direction;
	core.echo( 'GOING DOOOOWN!!' );
}

var Alien = new Class(
	{
		Extends : Sprite,
		
		initialize : function( x, y ) {
			this.parent( 'alien.png', vec2(x,y) );
			this.update_event = events.connect( 'onUpdate', this.update.bind(this) );
			events.connect( 'alien::oob', this.outOfBounds.bind(this) );
			this.left_border = 50;
			this.right_border = phoenix.resolution.x - 50;
			this.step_down = 25;
		},
		
		update : function() {
			this.move();
			this.checkCollision();
		},
		
		outOfBounds : function() {
			this.pos = vec2( this.pos.x, this.pos.y + this.step_down );
		},
		
		move : function() {
			if( alien_direction > 0 && this.pos.x >= this.right_border ) {
				events.fire( 'alien::oob' );
				flipDirection();
			}
			else if( alien_direction < 0 && this.pos.x <= this.left_border ) {
				events.fire( 'alien::oob' );
				flipDirection();
			}
			else {
				this.moveAlienX();
			}
		},
		
		moveAlienX : function() {
			this.pos = vec2( this.pos.x + alien_direction, this.pos.y );
		},
		
		checkCollision : function() {
			game.projectiles.each( function( proj, proj_index )
				{
					if( this.contains(proj.pos) ) {
						proj.die();
						this.die();
					}
				}.bind(this)
			);
		},
		
		die : function() {
			events.disconnect( this.update_event );
			this.drop();
		}
	}
);

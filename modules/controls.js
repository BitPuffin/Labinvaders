var Controller = new Class({

	initialize : function() {
    
		this.left = false;
		this.right = false;
		this.up = false;
		this.down = false;
		this.space = false;
		
		this.leftmouse = false;
		this.rightmouse = false;
		this.middlemouse = false;
		
		events.connect('key::up::down', function() { this.up = true; }.bind(this));
		events.connect('key::w::down', function() { this.up = true; }.bind(this));
		events.connect('key::up::up', function() { this.up = false; }.bind(this));
		events.connect('key::w::up', function() { this.up = false; }.bind(this));
		
		events.connect('key::down::down', function() { this.down = true; }.bind(this));
		events.connect('key::s::down', function() { this.down = true; }.bind(this));
		events.connect('key::down::up', function() { this.down = false; }.bind(this));
		events.connect('key::s::up', function() { this.down = false; }.bind(this));
		
		events.connect('key::left::down', function() { this.left = true; }.bind(this));
		events.connect('key::a::down', function() { this.left = true; }.bind(this));
		events.connect('key::left::up', function() { this.left = false; }.bind(this));
		events.connect('key::a::up', function() { this.left = false; }.bind(this));
		
		events.connect('key::right::down', function() { this.right = true; }.bind(this));
		events.connect('key::d::down', function() { this.right = true; }.bind(this));
		events.connect('key::right::up', function() { this.right = false; }.bind(this));
		events.connect('key::d::up', function() { this.right = false; }.bind(this));
		
		events.connect('mouse::left::up', function() { this.leftmouse = false; }.bind(this));
		events.connect('mouse::left::down', function() { this.leftmouse = true; }.bind(this));
		
		events.connect('mouse::right::up', function() { this.rightmouse = false; }.bind(this));
		events.connect('mouse::right::down', function() { this.rightmouse = true; }.bind(this));
		
		events.connect('mouse::middle::up', function() { this.middlemouse = false; }.bind(this));
		events.connect('mouse::middle::down', function() { this.middlemouse = true; }.bind(this));
		
		events.connect('key::space::up', function() { this.space = false; }.bind(this));
		events.connect('key::space::down', function() { this.space = true; }.bind(this));
        
    }

});

"use strict"; // Do NOT remove this directive!


PS.init = function( system, options ) {

	//PS.debug( "PS.init() called\n" );

	PS.gridSize(8,8 );

	PS.statusText( "Toy \n Press Delete to clear");
	PS.statusColor(PS.COLOR_RED);

	// Add any other initialization code you need here.
};

PS.touch = function( x, y, data, options ) 
{
	PS.color(x,y,PS.COLOR_RED)
	//PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

};

PS.keyDown = function( key, shift, ctrl, options ) {

	//PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );
	if (key)
	{
		//PS.debug( "if statement \n" );
		PS.color( PS.ALL, PS.ALL, PS.COLOR_WHITE );
	}
	
	// Add code here for when a key is pressed.
};


PS.release = function( x, y, data, options ) {

	//PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};


PS.enter = function( x, y, data, options ) {

	//PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};



PS.exit = function( x, y, data, options ) {

	//PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};


PS.exitGrid = function( options ) {

	//PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};





PS.keyUp = function( key, shift, ctrl, options ) {
	//PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};


PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

"use strict"; // Do NOT remove this directive!


PS.init = function( system, options ) {

	//PS.debug( "PS.init() called\n" );

	PS.gridSize(5,5 );

	PS.statusText( "Fill all but 1 square");

	PS.statusColor(PS.COLOR_BLACK);

	// Add any other initialization code you need here.
};


PS.touch = function( x,y, data, options ) 
{ 
    var check=true;
    var whitenum = 0;
    var cross = [[x,y],[x+1,y+1],[x+1,y-1],[x-1,y+1],[x-1,y-1]];
    var block = [[x,y],[x+1,y+1],[x+1,y-1],[x-1,y+1],[x-1,y-1],[x,y+1],[x,y-1],[x+1,y],[x-1,y]];
    if(PS.color (x,y)==PS.COLOR_WHITE)
    {
        for(var i =0; i <cross.length; i++)
        {
            if (PS.color(cross[i][0],cross[i][1])== (PS.COLOR_RED))
            {
                PS.color(cross[i][0],cross[i][1],PS.COLOR_WHITE);
            }
            else
            {
                PS.color(cross[i][0],cross[i][1],PS.COLOR_RED);
            }
        }
    }
    else
    {
        for(var i =0; i <block.length; i++)
        {
            PS.color(block[i][0],block[i][1],PS.COLOR_WHITE);
        }
    }

    while( check==true)
    {
        for(var j=0; j<5 && check==true;j++)
        {
            
            for(var k=0; k<5 && check==true; k++)
            {
                if(PS.color(j,k) == (PS.COLOR_WHITE))
                {
                    whitenum ++;
                    if (whitenum > 1)
                    {
                        check=false;
                    }
                    
                }
            }
        }

        if(whitenum <= 1)
        {
            PS.statusText( "YOU WIN!");
            PS.color( PS.ALL, PS.ALL, PS.COLOR_GREEN);
            check=false;
           
            setTimeout(function()
            {
                PS.color( PS.ALL, PS.ALL, PS.COLOR_WHITE);
                PS.statusText( "Fill all but 1 square");
            },5000);
        }
    

    }
// if (PS.color( PS.ALL, PS.ALL, PS.COLOR_RED))

};


PS.keyDown = function( key, shift, ctrl, options ) {

	//PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );
	
	
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

"use strict"; // Do NOT remove this directive!


PS.init = function( system, options ) {

	PS.debug( "PS.init() called\n" );

	PS.gridSize(23,23 );

	PS.statusText( "metaphor game");
	//writing a comment so it updates

	PS.statusColor(PS.COLOR_BLACK);

	//background & border
	var BKG = { rgb : 0xE5AA7A };
	//E5AA7A background color 
	PS.color ( PS.ALL, PS.ALL, BKG );
	PS.color (0,PS.ALL, PS.COLOR_GRAY_DARK);
	PS.color (22,PS.ALL, PS.COLOR_GRAY_DARK);
	PS.color (11,PS.ALL, PS.COLOR_GRAY_DARK);
	PS.color (PS.ALL,0, PS.COLOR_GRAY_DARK);
	PS.color (PS.ALL,22, PS.COLOR_GRAY_DARK);

	var POTCOLOR = { rgb : 0x934504 };
	//plant pot
	PS.color (15,20, POTCOLOR);
	PS.color (15,21, { rgb : 0x934504 });
	PS.color (15,19, { rgb : 0x934504 });
	PS.color (15,18, { rgb : 0x934504 });
	PS.color (16,20, { rgb : 0x934504 });
	PS.color (16,21, { rgb : 0x934504 });
	PS.color (16,19, { rgb : 0x934504 });
	PS.color (16,18, { rgb : 0x934504 });
	PS.color (17,21, { rgb : 0x934504 });
	PS.color (17,20, { rgb : 0x934504 });
	PS.color (17,19, { rgb : 0x934504 });
	PS.color (17,18, { rgb : 0x934504 });
	PS.color (18,20, { rgb : 0x934504 });
	PS.color (18,21, { rgb : 0x934504 });
	PS.color (18,19, { rgb : 0x934504 });
	PS.color (18,18, { rgb : 0x934504 });
	PS.color (14,19, { rgb : 0x934504 });
	PS.color (14,18, { rgb : 0x934504 });
	PS.color (19,19, { rgb : 0x934504 });
	PS.color (19,18, { rgb : 0x934504 });

	//bucket 
	var BCOLOR = { rgb : 0xD0D0D0 };
	//PS.color (bucketX,20, { rgb : 0xD0D0D0 });
	//PS.color (bucketX,19, { rgb : 0xD0D0D0 })
	//PS.color (bucketX+1,20, { rgb : 0xD0D0D0 })
	//PS.color (bucketX+1,19, { rgb : 0xD0D0D0 })
	


	

	

	// Add any other initialization code you need here.
};
console.log("after init\n");
/*
var bucketX = 4;

var frame = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];

	for(var i = 0; i<10; i++)
	{
		for(var j = 0; j<21; j++)
		{
			frame[i][j]= PS.COLOR_RED;
			
		}
	}

	frame[4][20] = BCOLOR;
*/
//var bucket = [[bucketX,19], [bucketX,20], [bucketX+1,19], [bucketX+1,20]];


/*
1. write what happens in the game
	bucket moves back and forth with the arrow keys
	red, yellow, and blue squares fall randomly 
	catch the yellow and blue items to grow the plant
		each square you catch the plant adds one pixel
	catch the red square and the plant removes one pixel
	grow the plant to the top of the screen to win
	
2. define all the vars you need
	grid size(frame)
	background color
	bucket's x location
	plant growth 

2.5. define functions
	grid/matrix- defines all the colors in the pixels
	start
	falling items
	gathering items/plant growth/shrinkage 
	death/reset
	win condition


3. define the matrex of the world

var frame =[[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0]];


*/
//while (true)
//{




	PS.keyDown = function( key, shift, ctrl, options ) {

		PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );
	
	
		
		if(key == (PS.KEY=1005))
		{
			bucketX --;

			frame[bucketX][20] = BCOLOR; 
	
			//PS.color (bucketX,20, { rgb : 0xD0D0D0 });
			//PS.color (bucketX+1,20, PS.COLOR_GRAY_DARK);
	
			PS.debug("left \n");
			
		
			if(bucketX < 0)
			{
				bucketX = 0;
				//PS.color (0,PS.ALL, PS.COLOR_GRAY_DARK);
			}
	
		}
	
		if(key ==(PS.KEY=1007))
		{
			bucketX ++;
			frame[bucketX][20] = BCOLOR; 
	
			//PS.color (bucketX,20, { rgb : 0xD0D0D0 });
			//PS.color (bucketX-1,20, PS.COLOR_GRAY_DARK);
	
			PS.debug("right \n");
	
			if(bucketX > 8)
			{
				bucketX = 8;
			}
		}
	
		PS.debug(bucketX + "\n");

		
		for(var i =0; i<10; i++)
		{
			for(var j = 0; j<21; j++)
			{
				PS.color(i+1,j+1, frame[i][j]);
			}
		}
	
		// Add code here for when a key is pressed.
	};

	
	/*
	setTimeout(function()
	{
	},1);  */
//}


PS.touch = function( x, y, data, options ) 
{

	//PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

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

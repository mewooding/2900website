"use strict"; // Do NOT remove this directive!

//vars
let BKG = { rgb : 0xE5AA7A };
let POTCOLOR = { rgb : 0x934504 };
let BORDER = PS.COLOR_GRAY_DARK;
let BCOLOR = { rgb : 0xD0D0D0 };
let DG = {rgb : 0x5BA416};
let LG = {rgb : 0x7CDf1f};

let BucketX = 5;
let sun = PS.COLOR_YELLOW;
let water = PS.COLOR_BLUE;
let pest = PS.COLOR_RED;
let score = 3;

let plant = [[16,17,DG],[17,17,LG],[17,16,LG],[16,16,DG],
			[16,15,DG],[15,15,DG],[14,15,DG],[14,14,DG],[13,14,DG],
			[17,15,DG],[17,14,LG],[18,14,LG],[18,13,DG],[19,13,LG],[19,12,DG],[20,12,DG],
			[16,14,LG],[16,13,LG],[16,12,DG],[15,12,DG],[14,12,DG],[14,11,DG],
			[16,11,DG],[17,11,DG],[17,10,LG],[18,10,DG],[19,10,DG],
			[16,10,LG],[16,9,LG],[15,9,LG],[15,8,DG],[14,8,DG],[14,7,DG],
			[16,8,DG],[17,8,LG],[17,7,DG],[17,6,DG],[18,6,DG],[18,5,DG],[19,5,LG],
			[16,6,LG],[16,5,LG],[16,4,DG],[16,3,DG],[15,3,DG],[15,2,LG],[14,2,LG],
			[17,2,DG],[17,1,LG]];

PS.init = function( system, options ) {

	//PS.debug( "PS.init() called\n" );

	PS.gridSize(23, 23);

	PS.statusText( "Plant Grow");
	//writing a comment so it updates

	PS.statusColor(PS.COLOR_BLACK);
	
	
	basemap();

	start();
	
	// Add any other initialization code you need here.
};

function start()
{
	PS.timerStart(5,play); //number is loop time, 1/60 sec


}


function basemap()
{

	var frame =[ //base map layout
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], //0
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //1
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //2
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //3
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //4
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //5
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //6
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //7
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //8
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //9
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //10
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //11
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //12
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //13
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //14
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //15
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //16
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //17
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,0,0,1], //18
			[1,0,0,0,0,0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,0,0,1], //19
			[1,1,1,1,1,3,3,1,1,1,1,1,0,0,0,2,2,2,2,0,0,0,1], //20
			[1,1,1,1,1,3,3,1,1,1,1,1,0,0,0,2,2,2,2,0,0,0,1], //21
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], //22
	];


	//render base map
	for(var i = 0; i < 23; i++)
	{
		for(var j = 0; j < 23; j++)
		{
			if(frame[i][j] == 0)
			{
				PS.color(j,i,BKG);
			}
			if(frame[i][j] == 1)
			{
				PS.color(j,i,BORDER);
			}
			if(frame[i][j] == 2)
			{
				PS.color(j,i,POTCOLOR);
			}
			if(frame[i][j] == 3)
			{
				PS.color(j,i,BCOLOR);
			}
		}
	}

	PS.color(plant[0][0], plant[0][1], plant[0][2]);
	PS.color(plant[1][0], plant[1][1], plant[1][2]);
	PS.color(plant[2][0], plant[2][1], plant[2][2]);

	
	
};

function play()
{
	//item init vars
	var itemtype = PS.random(6);
	var itemx = PS.random(10);

	
	

	//checks item location, changes score
	if(PS.color (BucketX,19) == sun || PS.color(BucketX,19) == water || PS.color (BucketX+1,19) == sun || PS.color(BucketX+1,19) == water)
	{
		score++;
	}
	else if(PS.color(BucketX,19) == pest || PS.color(BucketX+1,19) == pest)
	{
		score--;
	}

	// PS.debug("scrore is " + score + "\n");
	
	// deletes item if hits base
	for(var j = 10; j > 0; j--)
		{
		
			PS.color(j,19,BKG);
        }
		 
	//moves items down
	for(var i = 18; i > 0; i--)
	{
		for(var j = 10; j > 0; j--)
		{
			if (PS.color(j,i) == sun)
            {
                PS.color(j,i+1,sun);
				PS.color(j,i,BKG);
            }
			if (PS.color(j,i) == water)
            {
                PS.color(j,i+1,water);
				PS.color(j,i,BKG);
            }
			if (PS.color(j,i) == pest)
            {
                PS.color(j,i+1,pest);
				PS.color(j,i,BKG);
            }
		}
	}

	for (var i=0; i< plant.length; i++)
	{
		PS.color(plant[i][0],plant[i][1],BKG);

		if (i < score)
		{
			PS.color(plant[i][0], plant[i][1], plant[i][2]);

		}
		
	}

	//spawns item
	if (itemtype == 1)
	{
		PS.color(itemx, 1, sun)
	} 
	if (itemtype == 2)
	{
		PS.color(itemx, 1, water)
	} 
	if (itemtype == 3 || itemtype == 4) 
	{
		PS.color(itemx, 1, pest)
	} 

	PS.statusText("Plant Grow");
	
	if(score >48)
	{
		PS.statusText("YOU WIN!!!!!!");

		setTimeout(function()
		{
			score = 3;
		},3000);
		
	}
	if(score < 1)
	{
		PS.statusText("You Loose :(");
		setTimeout(function()
		{
			score = 3;
		},3000);
	}

	
};

PS.keyDown = function( key, shift, ctrl, options ) {

	//PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );
	
	//moves bucket
	let oldx = BucketX;
	
	if(key == PS.KEY_ARROW_LEFT)
	{
		if(BucketX == 1)
		{
			return;
		}
		BucketX--;
	}
	if(key == PS.KEY_ARROW_RIGHT)
	{
		if(BucketX == 9)
		{
			return;
		}
		BucketX++;
	}
	//changes colors
	PS.color(oldx,21,BORDER);
	PS.color(oldx+1,21,BORDER);
	PS.color(oldx+1,20,BORDER);
	PS.color(oldx,20,BORDER);

	PS.color(BucketX,21,BCOLOR);
	PS.color(BucketX+1,21,BCOLOR);
	PS.color(BucketX+1,20,BCOLOR);
	PS.color(BucketX,20,BCOLOR);
	
	// Add code here for when a key is pressed.
};




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

img = "";
nosex =0;
nosey= 0;
marioX = 325;
marioY = 325;

function preload() {
	img = loadImage("mario05.png")
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	createCanvas(650 ,400);
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
	if(results.length>0)
	{
		noseX = results[0].pose.nose.x;
		nosey = results[0].pose.nose.y;
		console.log("noseX = "+noseX +", noseY =" + noseY);
	}
}

function modalLoaded()
[
	console.log('Model Loaded!')
]

function draw() {
	background("#D3D3D3");
	if(noseX <300)
	{
		marioX =marioX - 1;
	}
	
	if(noseX >300)
	{
		marioX =marioX - 1;
	}
	if(noseY <150)
	{
		marioY =marioY - 1;
	}
	image(img,marioX,marioY,40 ,70);
	game()
}








var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10; //10 default
var ballY = 50;
var ballSpeedY = 4;

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 5; //default 3

var showingWinScreen = false;

var paddle1Y = 250;
var paddle2Y = 250;
var ballRadius = 10;
const PADDLE_HEIGHT = 100; //default 100
const PADDLE_THICKNESS = 10;

function calculateMousePos(evt){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	};
}

function handleMouseClick(evt){
	if(showingWinScreen){
		player1Score = 0;
		player2Score = 0;
		showingWinScreen = false;
	}
}
	
window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 30;
	setInterval(function(){
		moveEverything();
		drawEverything();
	}, 1000/framesPerSecond);

	canvas.addEventListener('mousedown',handleMouseClick);

	canvas.addEventListener('mousemove', function(evt){
		var mousePos = calculateMousePos(evt);
		paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
	});
}

function ballReset() {
	if(player1Score >= WINNING_SCORE ||
	   player2Score >= WINNING_SCORE) {
		showingWinScreen = true;
	}
	ballSpeedX = -ballSpeedX;
	ballX = canvas.width/2;
	ballY = canvas.height/2;
}

function computerMovement() {
	var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);

	if(paddle2YCenter < ballY-35){
		paddle2Y += 20;  //default 6
	} else if(paddle2YCenter > ballY+35){
		paddle2Y -= 20;  //default 6
	}
}

function moveEverything() {
	if(showingWinScreen){
		return;
	}
	computerMovement();

	ballX += ballSpeedX;
	ballY += ballSpeedY;

	if(ballX < 5+PADDLE_THICKNESS+ballRadius){
		if(ballY > paddle1Y &&
		   ballY < paddle1Y+PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;

			var deltaY = ballY - (paddle1Y+PADDLE_HEIGHT/2);
			ballSpeedY = deltaY * 0.35;
		} else if(ballX < 0) {
			player2Score++;  // must be BEFORE ballReset()
			ballReset();
		}
	}
	if(ballX > canvas.width-5-PADDLE_THICKNESS-ballRadius){
		if(ballY > paddle2Y &&
		   ballY < paddle2Y+PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;

			var deltaY = ballY - (paddle2Y+PADDLE_HEIGHT/2);
			ballSpeedY = deltaY * 0.35;
		} else if(ballX > canvas.width) {
			player1Score++;  // must be BEFORE ballReset()
			ballReset();
		}
	}
	if(ballY < 0){
		ballSpeedY = -ballSpeedY;
	}
	if(ballY > canvas.height){
		ballSpeedY = -ballSpeedY;
	}
}

function drawNet() {
	canvasContext.fillStyle = 'white';
	canvasContext.beginPath();
	canvasContext.moveTo(canvas.width/2-4,0);
	canvasContext.lineTo(canvas.width/2-4,canvas.height);
	canvasContext.stroke();
	for(var i=0;i<canvas.height;i+=40) {
		colorRect(canvas.width/2-1,i,2,20,'white');
	}
	canvasContext.beginPath();
	canvasContext.moveTo(canvas.width/2+4,0);
	canvasContext.lineTo(canvas.width/2+4,canvas.height);
	canvasContext.stroke();
}

// function drawPicture(){
// 	var img=document.getElementById("tennisBall");
// 	canvasContext.drawImage(img,100,100,50,50)
// }

function drawEverything() {
	//next line blanks out the screen
	colorRect(0,0,canvas.width,canvas.height, '#00CC33');

	canvasContext.font="30px Arial";
	if(showingWinScreen){
		canvasContext.fillStyle = 'white';

		if(player1Score >= WINNING_SCORE){
			canvasContext.fillText("You Win!",325,200);
		} else if(player2Score >= WINNING_SCORE){
			canvasContext.fillText("You Lose...",325,200);
		}

		canvasContext.fillText("Click to Continue",275,500);
		return;
	}

	//this draws the net
	drawNet();

	//this is left player paddle
	colorRect(5,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');

	//this is right computer paddle
	colorRect(canvas.width-PADDLE_THICKNESS-5,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');

	//next line draws the ball
	colorCircle(ballX, ballY, ballRadius, 'white');

	//this displays the scores
	canvasContext.fillText(player1Score,100,100);
	canvasContext.fillText(player2Score, canvas.width-100, 100);

	//draws logo at center
	drawLogo();

	
}

function drawLogo(){
	canvasContext.fillStyle = "rgba(255, 255, 255, 0.2)";
	canvasContext.beginPath();
	canvasContext.arc(canvas.width/2,canvas.height/2,80,0,Math.PI*2,true);
	canvasContext.fill();
	canvasContext.fillStyle = "rgba(255, 255, 255, 0.3)";
	canvasContext.font="normal normal 700 30px Open Sans";
	canvasContext.fillText("JAMIEJOHNDAVID",canvas.width/2-125,canvas.height/2);
}

function colorRect(leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY,width,height);
}

function colorCircle(centerX, centerY, radius, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
	canvasContext.fill();
}
// create canvas
var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");

// background image
var bgImage = new Image();
bgImage.src = "images/bg.jpg";

// hero image
var heroImage = new Image();
heroImage.src = "images/herp.png"

// cup image
var monsterImage = new Image();
monsterImage.src = "images/mug.png"

// sugar image
var sugarImage = new Image();
sugarImage.src = "images/sugar.png"

// pop sound
var audio = new Audio('sounds/pop.mp3');
audio.volume = 0.2;

// tired level bar
var bar = document.getElementById('bar');
bar.style.backgroundColor = 'red';

// game objects
var hero = {
	speed: 256,	// movement in pixels per socond
	x: canvas.width / 2,
	y: canvas.height / 2
};
var monster = {
	x: 0,
	y: 0,
};
var monsterCaught = 0;

var sugar = {
	x: 0,
	y: 0,
}

// handle keyboard controls
var keysDown = {};
addEventListener("keydown", function(e) {
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// reset the game when player catches a monster
var reset = function () {
	// throw monster somewhere on the screen randomly
	monster.x = (Math.random() * (canvas.width - 64));
	monster.y = (Math.random() * (canvas.height - 64));
	hero.speed = 256;
};

var sugarSpawn = function () {
	sugar.x = (Math.random() * (canvas.width - 64));
	sugar.y = (Math.random() * (canvas.height - 64));
}

var neustart = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	reset();
	sugarSpawn();
	monsterCaught = 0;
	value = 100;
	var keysDown = {};
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown || 87 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown || 83 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown || 65 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown || 68 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}
	if (13 in keysDown) {
		neustart();
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monsterCaught;
		audio.play();
		reset();
		if (value != 100) {
			value += 10;
		};
		};

	// sugar touching?
	if (
		hero.x <= (sugar.x + 32)
		&& sugar.x <= (hero.x + 32)
		&& hero.y <= (sugar.y + 32)
		&& sugar.y <= (hero.y + 32)
		) {
		hero.speed = 512;
		sugar.x = 1000;
		sugar.y = 1000;
		setTimeout(function(){ hero.speed = 256; }, 1000);
		setTimeout(function(){ sugarSpawn(); }, 5000);
	}

	// rand nicht ueberqueren
	if (hero.x >= 460) {	
		hero.x = 460;
	}
	if ( hero.x <= 20) {
		hero.x = 20;
	}
	if (hero.y >= 415) {	
		hero.y = 415;
	}
	if ( hero.y <= 10) {
		hero.y = 10;
	}
};

// tired level
var up = true;
var value = 100;
var increment = 10;
var ceiling = 0;

function PerformCalc() {
	if (up == true && value >= ceiling) {
		value -= increment
		if (value == ceiling) {
			//up = false;
			//alert ("game over\nscore: " + monsterCaught);
			neustart();
		}}
};

setInterval(PerformCalc, 750);

// draw everything
var render = function () {
	ctx.drawImage(bgImage, 0, 0);
	ctx.drawImage(heroImage, hero.x, hero.y);
	ctx.drawImage(monsterImage, monster.x, monster.y)
	ctx.drawImage(sugarImage, sugar.x, sugar.y)

	// score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("coffee: " + monsterCaught + "  awake: " + value + "%" , 64, 64);
	bar.style.width = value + 'px';
};

// main loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// request to this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// start the game
var then = Date.now();
reset();
sugarSpawn();
main();
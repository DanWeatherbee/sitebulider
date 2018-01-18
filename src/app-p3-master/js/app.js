/**
 * Globals
 */
var canvasW = 606,
    canvasH = 505,
    cWidth = canvasW / 5,
    rWidth = canvasH / 6,
    score = 0,
    bug_bites = 0,
    men = 5,
    starHits = 0,
    gemHits = 0,
    keyHits = 0,
    completed = 0,
    bugAmount = 1,
    bonus = 0,
    usr,
    yourscore,
    lastplayer,
    lastusr,
    lastplayerscore;




name = 'New user';
name = prompt("Nickname", "Ace");
// Add to localstorage.
localStorage.setItem('name', name);
/**
 * Prizes for the player to win
 */
var GemBlue = function() {
    this.reset();
    this.sprite = "images/Gem Blue.png";
};

var GemGreen = function() {
    this.reset();
    this.sprite = "images/Gem Green.png";
};

var GemOrange = function() {
    this.reset();
    this.sprite = "images/Gem Orange.png";
};


var Star = function() {
    this.reset();
    this.sprite = "images/Star.png";
};

var Heart = function() {
    this.reset();
    this.sprite = "images/Heart.png";
};

var Key = function() {
    this.reset();
    this.sprite = "images/Key.png";
};

var Selector = function() {
    this.reset();
    this.sprite = "images/Selector.png";
};

GemBlue.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

Key.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

GemGreen.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

GemOrange.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

Heart.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

Selector.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

GemBlue.prototype.update = function(dt) {

    /**
     * You should multiply any movement by the dt parameter
     * which will ensure the game runs at the same speed for
     * all computers.
     */
    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + canvasW / 6 > player.x) {
        score = score + 100;
        gemHits = gemHits + 100;
        player.sound("sound/star.mp3");
        this.reset();

    }
};

Key.prototype.update = function(dt) {

    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + canvasW / 6 > player.x) {
        score = score + 500;
        keyHits = keyHits + 500;
        player.sound("sound/star.mp3");
        this.reset();
    }
};

GemOrange.prototype.update = function(dt) {

    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + canvasW / 6 > player.x) {
        score = score + 150;
        gemHits = gemHits + 100;
        player.sound("sound/star.mp3");
        this.reset();
    }
};

GemGreen.prototype.update = function(dt) {

    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + canvasW / 6 > player.x) {
        score = score + 150;
        gemHits = gemHits + 100;
        player.sound("sound/star.mp3");
        this.reset();
    }
};

Heart.prototype.update = function(dt) {

    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + canvasW / 6 > player.x) {
        score = score + 1500;
        player.sound("sound/star.mp3");
        this.reset();
    }
};

Selector.prototype.update = function(dt) {
    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + canvasW / 6 > player.x) {
        score = score + 1000;
        starHits = starHits + 1000;
        player.sound("sound/star.mp3");
        this.reset();
    }
};

GemBlue.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

GemGreen.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

GemOrange.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Heart.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Selector.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Star.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

Star.prototype.update = function(dt) {
    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + canvasW / 6 > player.x) {
        starHits = starHits + 1000;
        player.sound("sound/star.mp3");
        this.reset();
    }
};

Star.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
 * Enemies our player must avoid
 */
var Enemy = function() {

    /**
     * Variables applied to each of our instances go here,
     * we"ve provided one for you to get started
     */
    this.reset();
    /**
     * The image/sprite for our enemies, this uses
     * a helper we"ve provided to easily load images
     */
    this.sprite = "images/enemy-bug.png";
};

Enemy.prototype.reset = function() {
    this.c = -2;
    this.r = randomize(1, 3);
    this.x = cWidth * this.c;
    this.y = cWidth * this.r;
    this.speed = randomize(3 / 2, 6);
};

Enemy.prototype.update = function(dt) {
    this.x = (this.x + this.speed);
    this.y = canvasH / (6 + 1) * this.r;

    if (this.x > canvasH) {
        this.reset();
    }
    if (player.r === this.r && this.x + 82 > player.x && this.x + 5 < player.x) {
        player.reset();
        this.reset();
        bug_bites++;
        men--;
        player.sound("sound/bughit.mp3");
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Hundred = function() {
    this.reset();
    this.sprite = "images/100.png";
};

Hundred.prototype.reset = function() {
    this.x = 0;
    this.y = 0;
};

Hundred.prototype.update = function(dt) {
    if (score > 20000) {
        this.x = 430;
        this.y = 480;
    }

};

Hundred.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/**
 * Now write your own player class
 * This class requires an update(), render() and
 * a handleInput() method.
 */


var Player = function() {
    this.reset();
    this.sprite = "images/char-boy.png";
};



/**
 * Now instantiate your objects.
 * Place all enemy objects in an array called allEnemies
 */
var star = new Star();
var gem_b = new GemBlue();
var gem_g = new GemGreen();
var gem_o = new GemOrange();
var heart = new Heart();
var key = new Key();
var selector = new Selector();
var hundred = new Hundred();
var allEnemies = [];
for (var i = 0; i < bugAmount; i++) {
    allEnemies.push(new Enemy());
}

for (var i = 0; i < 3; i++) {
    allEnemies.push(new Enemy());
}

Player.prototype.scoring = function() {
    /**
            * This is the scoreboard.

* Backgound fill.
*/
    ctx.fillStyle = "navy";
    ctx.fillRect(0, 0, 606, 700);

    /**
     * Top of board
     */
    ctx.font = "25pt Impact";
    ctx.fillStyle = "red";
    ctx.fillText("Arcade Frogger Game Clone Project", 15, 40);

    ctx.font = "25pt Impact";
    ctx.fillStyle = "black";
    ctx.strokeText("Arcade Frogger Game Clone Project", 15, 40);

    ctx.font = "27pt Impact";
    ctx.fillStyle = "lime";
    ctx.fillText("Game Over", 175, 75);

    ctx.font = "27pt Impact";
    ctx.fillStyle = "black";
    ctx.strokeText("Game Over", 175, 75);

    /**
     * Bottom
     */
    ctx.font = "27pt Impact";
    ctx.fillStyle = "lime";
    ctx.fillText("F5 to Play", 175, 535);

    ctx.font = "27pt Impact";
    ctx.fillStyle = "black";
    ctx.strokeText("F5 to Play", 175, 535);
    // Add to localstorage.
    localStorage.setItem('completed', completed);
    localStorage.setItem('score', score);
    localStorage.setItem('men', men);
    localStorage.setItem('bonus', bonus);
    usr = localStorage.getItem('name', name);
    yourscore = localStorage.getItem('score', score);
    lastplayerscore = localStorage.getItem('lastplayerscore', lastplayerscore);
    lastplayer = localStorage.getItem('lastplayer', lastplayer);
    $('.footer_text').html('<h4>High Score </h4>' + lastplayer + ' ' + lastplayerscore);
    if (yourscore > lastplayerscore) {
        lastplayerscore = yourscore;
        lastplayer = usr;
        localStorage.setItem('lastplayerscore', lastplayerscore);
        localStorage.setItem('lastplayer', lastplayer);
    }
    $('#game-header').html(name + ' ' + score);
    $('.footer_text2').remove();
    this.reset();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.c = 2;
    this.r = 5;
    this.moveable = true;
};

Player.prototype.update = function(dt) {

    if (this.moveable) {
        this.x = canvasW / 6 * this.c;
        this.y = canvasH / (6 + 1) * this.r;
    }
    if (this.y < canvasH / (6 + 1) && this.moveable) {
        this.moveable = false;
        return true;
    }
};

Player.prototype.sound = function(mp3) {
    var new_sound = new Sound(mp3);
    new_sound.play();
};

Player.prototype.playSound = function(mp3) {
    if (completed == 10) {
        bugAmount = 2
        this.sound("sound/unstoppable.mp3");
        this.sprite = "images/char-pink-girl.png";
        men++
    }
    if (completed == 30) {
        this.sound("sound/wickedsick.mp3");
        this.sprite = "images/char-horn-girl.png";
        bugAmount = 3
        men++
    }
    if (completed == 50) {
        this.sound("sound/godlike.mp3");
        this.sprite = "images/char-cat-girl.png";
        bugAmount = 4
        men++
    }
    if (completed == 70) {
        this.sound("sound/sgodlike.mp3");
        this.sprite = "images/char-princess-girl.png";
        bugAmount = 5
        men++
    }
};
Player.prototype.handleInput = function(key) {
    switch (key) {
        case "left":
            this.c--;
            break;
        case "up":
            this.r--;
            break;
        case "right":
            this.c++;
            break;
        case "down":
            this.r++;
            break;
    }
    /**
     * Left border
     */
    if (this.c < 0) this.c = 0;
    /**
     * Right border
     */
    if (this.c > 4) this.c = 4;
    /**
     * Bottom border
     */
    if (this.r > 5) this.r = 5;
    /**
     * Top border
     */
    if (this.r < 0) {
        score = score + 10;
        completed++;
        this.playSound();

        if (score > 10000 && score < 20500) {
            bonus++;
        }
        score = score + (bonus * 10000);
        this.reset();
    }

};
/**
 * This can pull random numbers with two input variables.
 */
function randomize(min, max) {
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

/**
 * Place the player object in a variable called player
 */

var player = new Player();

/**
 * This listens for key presses and sends the keys to your
 * Player.handleInput() method. You don"t need to modify this.
 */
document.addEventListener("keyup", function(e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
/**
 * Reference http:/*www.w3schools.com/games/game_sound.asp
 * This is the sound control and creator function.
 */
function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
};
var Bg = function() {
    this.reset();
    this.sprite = "images/clouds.jpg";
};


Bg.prototype.reset = function() {

    this.x = 0;
    this.y = 0;
    this.speed = .1;
};

Bg.prototype.update = function(dt) {
    this.x = (this.x + this.speed);
    this.y = 0;

    if (this.x > 0 || this.x < -200) {
        this.speed = -this.speed
    }
};

Bg.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
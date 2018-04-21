var Mtn2 = function() {
    this.reset();
    this.sprite = "images/mtn2.png";
};


Mtn2.prototype.reset = function() {

    this.x = 1600;
    this.y = 100;

    this.speed = -.1;
};

Mtn2.prototype.update = function(dt) {
    this.x = (this.x + this.speed);

};

Mtn2.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
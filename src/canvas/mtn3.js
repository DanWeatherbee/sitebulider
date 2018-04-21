var Mtn3 = function() {
    this.reset();
    this.sprite = "images/mtn3.png";
};


Mtn3.prototype.reset = function() {

    this.x = 3200;
    this.y = 200;

    this.speed = .1;
};

Mtn3.prototype.update = function(dt) {
    this.x = (this.x + this.speed);

};

Mtn3.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
var Plane = function() {
    this.reset();
    this.sprite = "images/plane.png";
};


Plane.prototype.reset = function() {

    this.x = randomize(-300, -1500);
    this.y = randomize(10, 200);
    this.speed = randomize(1, 5);
};

Plane.prototype.update = function(dt) {
    if (this.x > innerWidth) {
    this.reset();
    }
    this.x = (this.x + this.speed);

};

Plane.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
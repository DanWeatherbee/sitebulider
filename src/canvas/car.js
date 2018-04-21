var Car = function() {
    this.reset();
    this.sprite = "images/car.png";
};


Car.prototype.reset = function() {

    this.x = randomize(-300, -1500);
    this.y = 450;
    this.speed = randomize(1, 5);
};

Car.prototype.update = function(dt) {
    if (this.x > innerWidth) {
    this.reset();
    }
    this.x = (this.x + this.speed);

};

Car.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
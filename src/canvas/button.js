var Button = function() {
    this.reset();
    this.sprite = "images/button.png";
};


Button.prototype.reset = function() {

    this.x = -500;
    this.y = innerHeight / 3;
    this.speed = 40;
};

Button.prototype.update = function(dt) {

    if (this.x > innerWidth / 2 - 100) {
        this.speed = 0;

    };
    this.x = (this.x + this.speed);
};

Button.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
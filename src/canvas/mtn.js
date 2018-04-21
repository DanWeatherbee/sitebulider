var Mtn = function() {
    this.reset();
    this.sprite = "images/mtn.png";
};


Mtn.prototype.reset = function() {

    this.x = 0;
    this.y = 100;

    this.speed = -.1;
};

Mtn.prototype.update = function(dt) {
    this.x = (this.x + this.speed);


    // if (this.x > 0 || this.x < -130) {
    //     this.speed = -this.speed
    // }
};

Mtn.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
var Grass = function() {
    this.reset();
    this.sprite = "images/grass.png";
};


Grass.prototype.reset = function() {

    this.x = 0;
    this.y = 450;

    this.speed = .1;
};

Grass.prototype.update = function(dt) {
    this.x = (this.x + this.speed);


    if (this.x < 0 || this.x > 25000) {
        this.speed = -this.speed
    }
};

Grass.prototype.render = function() {

    for (var i = 0;i < 20;i++) {
        ctx.drawImage(Resources.get(this.sprite), this.x + (i * -1500), this.y);
    };


};
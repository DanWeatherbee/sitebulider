var Tree = function() {
    this.reset();
    this.sprite = "images/tree.png";
};


Tree.prototype.reset = function() {

    this.x = -300;
    this.y = -40;

    this.speed = 0;
};

Tree.prototype.update = function(dt) {
    this.x = (this.x + this.speed);

    // if (this.x > 0 || this.x < -1000) {
    //     this.speed = -this.speed
    // }
};

Tree.prototype.render = function() {

        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
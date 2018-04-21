var gravity = 0,
    friction = 0;


function Star(x, y, r, p, m, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.p = p;
    this.m = m;
    this.dx = dx;
    this.dy = dy;
}

Star.prototype.reset = function() {

    this.x = 0;
    this.y = 200;
};

Star.prototype.update = function(dt) {
    if (this.x > innerWidth / 2 - 2) {
        this.dx = 0;

    };

   this.x += this.dx;
};
Star.prototype.render = function() {

    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x, this.y);
    ctx.moveTo(0, 0 - this.r);
    for (var i = 0; i < this.p; i++) {
        ctx.rotate(Math.PI / this.p);
        ctx.lineTo(0, 0 - (this.r * this.m));
        ctx.rotate(Math.PI / this.p);
        ctx.lineTo(0, 0 - this.r);
    }
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 50;

    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
};
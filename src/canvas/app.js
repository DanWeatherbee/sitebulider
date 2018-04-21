
/**
 * Now instantiate your objects.
 * Place all enemy objects in an array called allEnemies
 */



var bg = new Bg();
var mtn = new Mtn();

var mtn2 = new Mtn2();
var mtn3 = new Mtn3();
var grass = new Grass();
var car = new Car();
var plane = new Plane();

var tree = new Tree();
var button = new Button();

/**
 * This can pull random numbers with two input variables.
 */
function randomize(min, max) {
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

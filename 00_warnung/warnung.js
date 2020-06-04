// Hintergrund und scrollbalken anpassen
// ok button auf ellipse, weiterleiten auf error_home

var xDelta = 60;
var yDelta = 70;
var xRichtung = 1;
var yRichtung = 1;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function draw() {
    background('lightgrey');

    if (xDelta > windowWidth) {
        xRichtung = -1;
    }
    if (xDelta < 100) {
        xRichtung = 1;
    }
    xDelta = xDelta + xRichtung;

    if (yDelta > windowHeight) {
        yRichtung = -1;
    }
    if (yDelta < 100) {
        yRichtung = 1;
    }
    yDelta = yDelta + yRichtung;

    fill('white'), noStroke();
    ellipse(xDelta, mouseX, 200, 200);

    fill('red'), noStroke();
    ;
    ellipse(mouseY, yDelta, 200, 200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
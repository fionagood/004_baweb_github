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

    // circle 1
    fill('white'), noStroke();
    ellipse(xDelta, mouseX, 200, 200);
    textSize(32);
    fill('red');
    text('OK', xDelta, mouseX);

    // circle 2
    fill('red'), noStroke();
    ellipse(mouseY, yDelta, 200, 200);
    textSize(32);
    fill('white');
    text('OK', mouseY, yDelta);
}

function mouseClicked() {
    var circle1x = xDelta;
    var circle1y = mouseX;

    var cirlce2x = mouseY;
    var circle2y = yDelta;

    if (mouseX > circle1x - 100 && mouseX < circle1x + 100 && mouseY > circle1y - 100 && mouseY < circle1y + 100) {
        // alert("OK1");
        window.location.href = '../01_error/error_home.html';
    }

    if (mouseX > cirlce2x - 100 && mouseX < cirlce2x + 100 && mouseY > circle2y - 100 && mouseY < circle2y + 100) {
        //  alert("OK2");
        window.location.href = '../01_error/error_home.html';
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
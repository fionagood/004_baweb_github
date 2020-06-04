// Hier muss eine Warnung für Epileptiker rein!

function setup() {
    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function draw() {

    background(10, 10, 10);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
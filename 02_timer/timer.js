// Hier muss einen Timer rein
// + Icon für PDF download

function setup() {
    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    background(0, 0, 255);
}

function draw() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
// Die folgende Aufgabe ist einen News Text.
// Der Text wird jedoch immer wieder von Störern beeinflusst, so dass das lesen erschwert wird

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
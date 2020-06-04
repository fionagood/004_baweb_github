// Der Hintergrund soll schwarz sein und das Bild blinkend

let capture;
var i = 0
let ele;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    capture = createCapture(VIDEO);
    // capture.hide();
}

function draw() {

    background(255);
    image(capture, 0, 0, windowWidth, windowHeight);
    filter(GRAY);

    i = i + 1
    // jedes 10. Mal ist die Bedingung erfüllt, blinkt
    if (i % 5 === 0) {
        background(255);
    } else {
        // alle anderen Zeiten, mit 0 auffüllen
        // background(0);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

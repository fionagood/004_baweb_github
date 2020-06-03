let capture;
var i = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    //capture.hide();
}

function draw() {
    background(255);
    image(capture, 0, 0, windowWidth, windowHeight);
    filter(GRAY);

    i = i + 1

    // jedes 10. Mal ist die Bedingung erfüllt, blinkt
    if (i % 15 === 0) {
        background(255);
    } //else {
        // alle anderen Zeiten, mit 0 auffüllen
        // background(0);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

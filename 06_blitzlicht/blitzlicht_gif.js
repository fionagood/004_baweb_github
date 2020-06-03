// Der Hintergrund soll schwarz sein und das Bild blinkend

let capture;
var i = 0
let ele;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    //capture.hide();
    ele = createAudio('assets/binaural_beats_theta_wave.mp3');
}

function draw() {
    background(255);
    image(capture, 0, 0, windowWidth, windowHeight);
    filter(GRAY);

    ele.autoplay(true);


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

// Der Hintergrund soll schwarz sein und das Bild blinkend

let song;
let capture;
var i = 0
let ele;

function setup() {
    song = loadSound('assets/binaural_beat_theta_wave.mp3');
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
    if (i % 5 === 0) {
        background(255);
    } else {
        // alle anderen Zeiten, mit 0 auffüllen
        // background(0);
    }
}


function mousePressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        background(255, 0, 0);
    } else {
        song.play();
        background(0, 255, 0);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

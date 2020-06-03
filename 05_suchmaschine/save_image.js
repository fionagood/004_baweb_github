// Das ist ein Test zum Etwas herunterladen

let photo;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function preload() {
    photo = loadImage('assets/google.jpg');
}

function draw() {
    background(200);
    image(photo, windowWidth / 2, windowHeight / 2, photo.width / 4, photo.height / 4);
}

function keyTyped() {
    if (key === 's') {
        photo.save('test', 'png');
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

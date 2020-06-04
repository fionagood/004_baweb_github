// Gamefication. Es soll nach ein paar Sekunden ein Pop-up erscheinen in dem aufgefordert wird die Linie 10x nach links und rechts ans Browserfenster anschlagen
// Dann erscheint ein weiteres Pop-up, welches den Fehler behoben erklährt und man wieder zurück zum Anfang der Error-Seite kann oder zur nächsten (Timer)
// scrollbalken müssen weg

let img;
let myFont;

function preload() {
    myFont = loadFont('../orbitron/orbitron-medium.otf');
}

function setup() {
    img = loadImage('assets/error.svg');

    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}


function draw() {
    textFont(myFont);
    image(img, 0, windowHeight / 2, windowWidth, 100);
    // ellipse(mouseX, mouseY, 10, 10);
    background(255, 0, 0)


    rect(mouseY * 2, 0, 10, height)
    rect(mouseX * 2, 0, 10, height)

    fill(255);
    noStroke();
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
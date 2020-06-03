// Klicken sie?
// Hier muss eine Animation verlinkt werden und auf grösse des Browsers abgespielt werden
// Nach der Animation erscheint automatisch die nächste Seite - einen blauen Screen (random words-seite)

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
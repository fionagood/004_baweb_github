// Hier muss einen Timer rein, der auf alle anderen Seiten adaptiert werden kann
// bei 0 sek kommt wieder ein popup, welches einen auf eine seite verweist, wo ein countdown von 12h läuft

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
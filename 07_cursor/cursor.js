// Es werden Fragen gestellt, mit jeweils zwei Antwort-Buttons.
// Doch die beiden Cursor bewegen sich synchron und drücken immer auf beide Antworten.
// Eine andere Aufgabe ist, dass es zwei Bilder gibt, links und rechts im Browserfenster.
// Wenn man darauf drückt wird weiter geschaltet, beide bilder gleichzeitig

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
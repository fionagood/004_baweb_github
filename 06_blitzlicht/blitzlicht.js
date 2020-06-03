// Hier muss das Stroboskop unregelmässiger sein, mal schnell, mal langsamer
// Sound muss eingebaut werden
// Pop-up am Anfang mit Warnhinweis und Anweisung
// Nach ca 1 min soll es auf die nächste Seite verlinken (random words)

function setup() {
    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    background(0, 0, 255);
}

var i = 0

function draw() {
    // jedes Mal, wenn draw() aufgerufen wird, wird i um eins erhöht
    i = i + 1

    // jedes 10. Mal ist die Bedingung erfüllt, blinkt
    if (i % 15 === 0) {
        background(255);
    } else {
        // alle anderen Zeiten, mit 0 auffüllen
        background(0);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

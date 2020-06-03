// Hier stimmen zum Teil Wort und Gesprochenes nicht übereinandet, Fehler beheben
// Next-Pfeil einbauen, Verlinkung auf die nächste Seite (Suchmaschine)
// Aktuelles Bild downloaden - Icon / button
// + Icon für PDF download

var lexicon;
var voice;
var word = '';
var size = 10;

let myFont;

function preload() {
    myFont = loadFont('../orbitron/orbitron-medium.otf');
}

function setup() {
    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    createCanvas(windowWidth, windowHeight);
    background(0, 0, 255);
    voice = new p5.Speech();
    lexicon = new RiLexicon();
}

function draw() {
    // background(255, 0, 0);
    textFont(myFont);
    textSize(size);
    textAlign(CENTER);
    fill(0, 0, 255);
    stroke(255);
    text(word, width / 2, height / 2);

    size++;
}

// wenn gedrückt wird, random wort generieren und sprechen
function mousePressed() {
    size = 10;
    word = lexicon.randomWord('nn', 3);
    voice.speak(word);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

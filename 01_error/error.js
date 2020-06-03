// Hier fehlt die Gamefication. Es soll nach ein paar Sekunden ein Pop-up erscheinen in dem aufgefordert wird die Linie 10x nach links und rechts ans Browserfenster anschlagen
// Dann erscheint ein weiteres Pop-up, welches den Fehler behoben erklährt und man wieder zurück zum Anfang der Error-Seite kann oder zur nächsten (Timer)
// + Icon für PDF download

let img;
let myFont;

function preload() {
    myFont = loadFont('../orbitron/orbitron-medium.otf');
}

let reverb
let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

let env;
let triOsc;



function setup() {
    img = loadImage('assets/error.svg');

    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    //   background(0);

    // let cnv = createCanvas(100, 100);
    // cnv.mousePressed(playSynth);
    // cnv.background(0)

    // sound
    env = new p5.Envelope(t1, l1, t2, l2);
    triOsc = new p5.Oscillator('sine');
    env.setRange(0.3, 0)
    reverb = new p5.Reverb();
    reverb.drywet(1);
    reverb.process(triOsc, 3, 2);
}

    // Linie
function draw() {
    textFont(myFont);
    image(img, 0, windowHeight / 2, windowWidth, 100);
    // ellipse(mouseX, mouseY, 10, 10);
    noStroke();
    fill(255);


    background(0, 100)
    if (frameCount % 20 == 0) {
        background('red')
        playSynth()
        textSize(50)
    }

    // Linie
    text(int(frameCount / 10 + mouseX / 10) % 20, width / 2, 100)
    rect(mouseY*2, 0, 10, height)
}


function playSynth() {
    triOsc.freq(100 * pow(pow(2, 1 / 12), int(frameCount / 10 + mouseX / 10) % 20));
    triOsc.start();
    // triOsc.amp(0.2);
    env.play(triOsc);
}

function mouseMoved() {
    playSynth()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
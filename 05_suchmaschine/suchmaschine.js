// Es erscheint das google-fenster in blau
// Im Suchfenster steht: «was suchst du?». Man kann hier ein beliebiges Wort eingeben.
// Nach dem Ladevorgang entwickelt sich das Google-Sucherfenster zur Maus mit der man malen kann und es erscheinen zwei weitere Suchfenster mit:
// «wann bist du geboren?» und «an welcher Adresse bist du aufgewachsen?».
// Nach dieser Eingabe entsteht eine Animation aus Googlemaps,
// welche auf dein Kindheitsort zoomt, nach einer kurzen Zeit kommen Bilder von Dingen die man in der Kindheit gekannt und gebraucht hat.
// Wild durcheinander randon ein und ausgeblendet. Nach der Animation wird man gefragt,
// ob man ein Standbild aus der Animation herunterladen möchte. Welches für jeden Nutzer ein Individuelles Ergebnis gibt.
// Nachdem man das Bild heruntergeladen hat oder auch nicht, wird man zur nächsten Aufgabe geleitet.


let img;

function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('assets/google.jpg');
    background(0, 0, 255);
}

function draw() {
    // background(255, 0, 0);
    image(img, mouseX, mouseY, 500, 200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

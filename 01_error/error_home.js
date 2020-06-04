// scrollbalken müssen weg
// popup nach 2 sekunden einblenden lassen «error muss behoben werden» /«ok» «nein danke» und verlinken zu error-seite

let img;

function setup() {
    img = loadImage('assets/error.svg');

    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    background(255, 0, 0);
}

function draw() {
    image(img, 0, windowHeight / 2, windowWidth, 100);
    noStroke();
    fill(255, 255, 255, 70);
    rect(mouseX, mouseY, 1, height);


}

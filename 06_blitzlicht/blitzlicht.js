// Der Hintergrund soll schwarz sein und das Bild blinkend

let capture;
var i = 0
let ele;


// Update the count down every 1 second
function setTimer() {

  // Set the date we're counting down to
  var countDownDate = new Date();
  console.log(countDownDate, countDownDate.getMinutes(), 1);
  countDownDate.setMinutes(countDownDate.getMinutes() + 1);

  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      window.location.href = "../00_warnung/warnung.html"
    }
  }, 1 * 1000);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  capture = createCapture(VIDEO);
// capture.hide();
}

function draw() {

  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);
  filter(GRAY);

  i = i + 1
  // jedes 10. Mal ist die Bedingung erfüllt, blinkt
  if (i % 5 === 0) {
    background(255);
  } else {
    // alle anderen Zeiten, mit 0 auffüllen
    // background(0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
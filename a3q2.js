function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(67,132,176)");
  //Background
  push();
  noStroke();
  fill("rgb(45,126,45)");
  ellipse(100, 400, 300);
  ellipse(300, 400, 300);

  pop();

  basket(mouseX, 350);
}
// Catcher Function
function basket(x, y) {
  if (mouseIsPressed) {
    push();
    translate(x, y);
    angleMode(DEGREES);
    fill("red");
    ellipse(-30, 0, 35);
    fill("purple");
    ellipse(0, 0, 40);
    fill("orange");
    ellipse(30, 0, 30);
    strokeWeight(4);
    stroke(0);
    fill("rgb(120,84,41)");
    arc(0, 0, 100, 100, 0, 180);
    pop();
  } else {
    push();
    translate(x, y);
    angleMode(DEGREES);
    strokeWeight(4);
    stroke(0);
    fill("rgb(120,84,41)");
    arc(0, 0, 100, 100, 0, 180);
    pop();
  }
}

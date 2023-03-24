function setup() {
  createCanvas(400, 400);
  speed = 8;
  fruitX = random(0, 400);
  fruitY = 0;
  fruitIsFalling = false;
  groundY = 400;
  basketCatch = false;
  basketY = 350;
  basketX = mouseX;
  basketHeight = 50;
  basketWidth = 70;
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

  let basketX = mouseX;

  basket(basketX, basketY);

  if (fruitIsFalling) {
    addFruit(fruitX, fruitY);
    fruitY = fruitY + speed;
  }
  if (fruitY > groundY) {
    fruitIsFalling = false;
    fruitY = 0;
    fruitX = random(0, 400);
  }
  let fruitHeight = groundY > fruitY && fruitY > groundY - basketHeight;
  let fruitLeft = fruitX < basketX;
  let fruitRight = basketX + basketWidth < fruitX;
  if (fruitHeight && !fruitLeft && !fruitRight) {
    basketCatch = true;
  } else {
    basketCatch = false;
  }
}
function mousePressed() {
  fruitIsFalling = true;
}

//Seed
function addFruit(x, y) {
  push();
  fill("red");
  noStroke();
  ellipse(x, y, 30);
}

// Catcher Function
function basket(x, y) {
  if (basketCatch) {
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
    noStroke();
    arc(0, 0, 100, 100, 0, 180);
    pop();
  } else {
    push();
    translate(x, y);
    angleMode(DEGREES);
    strokeWeight(4);
    stroke(0);
    fill("rgb(120,84,41)");
    noStroke();
    arc(0, 0, 100, 100, 0, 180);
    pop();
  }
}

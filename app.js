
console.log("game launched");

let cols, rows;
let w = 20;
let grid = [];
let geek;
let geekImg1;
let geekImg2;
let scl = 40;
let bitFood;
function preload() {
    geekImg1 = loadImage('assets/geek2.png');
    geekImg2 = loadImage('assets/geek3.png');
}
// testGeek();
function setup() {
    createCanvas(400,400);
    cols = floor(width/scl);
    rows = floor(height/scl);
    console.log(cols,rows);

    for(let j =0; j< rows; j++) {
        for(let i=0; i<cols;i++) {
            let cell = new Cell(i,j);
            grid.push(cell);
        }
    }

    geek = new Geek();
    frameRate(10);
    pickLocation();
    // bitFood = createVector(random(height),random(width));
}

function pickLocation() {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    bitFood = createVector(floor(random(cols)),floor(random(rows)))
    bitFood.mult(scl);
}

function draw() {
    background(51);
    for(let i=0 ;i<grid.length;i++){
        grid[i].show();
    }
    geek.update();
    geek.show();
    select('#score').html(geek.getScore());
    if(geek.eat(bitFood)){
       pickLocation(); 
    };
    fill(152,66,244);
    rect(bitFood.x, bitFood.y, scl, scl);

}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        geek.direction(0,-1);
    } else if(keyCode === DOWN_ARROW) {
        geek.direction(0,1);
    } else if(keyCode === RIGHT_ARROW) {
        geek.direction(1,0);
    } else if(keyCode === LEFT_ARROW) {
        geek.direction(-1,0);
    }
}
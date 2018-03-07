console.log("game launched");

let cols, rows;
let w = 40;
let grid = [];
let geek;

function setup() {
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    console.log(cols,rows);

    for(let j =0; j< rows; j++) {
        for(let i=0; i<cols;i++) {
            let cell = new Cell(i,j);
            grid.push(cell);
        }
    }

    geek = new Geek();

}

function draw() {
    background(51);
    for(let i=0 ;i<grid.length;i++){
        grid[i].show();
    }
    geek.update();
    geek.show();
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.show = function() {
        let x = this.i*w;
        let y = this.j*w;
        stroke(255);
        noFill();
        rect(x,y,w,w);
    }
}

function Geek() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    this.show = function() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}
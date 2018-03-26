function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.show = function() {
        let x = this.i*scl;
        let y = this.j*scl;
        stroke(255);
        noFill();
        rect(x,y,scl,scl);
    }
}


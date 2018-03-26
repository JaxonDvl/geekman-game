function Geek() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    let score = 0;
    this.motionSet = 0;
    this.direction = function(x,y) {
        this.xspeed =x;
        this.yspeed =y;
    }
    this.eat = function(pos) {
        let distance = dist(this.x, this.y, pos.x, pos.y);
        if(distance <1) {
            score+=1;
            return true;
        } else {
            return false;
        }
    }
    this.update = function() {
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
        if(this.motionSet){
            this.motionSet = 0;
            image(geekImg1, this.x, this.y);
        } else {
            this.motionSet = 1;
            image(geekImg2, this.x, this.y);
        }
       
    }
    this.show = function() {
        fill(255);
        // rect(this.x, this.y, scl, scl);
        //image(geekImg1, this.x, this.y);
    }
    this.getScore = function() {
        return score;
    }
}
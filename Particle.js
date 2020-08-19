class Particle{
    constructor(x,y) {
        var options = {
          //  isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y,10,options);
        this.height = 15;
        this.width = 15;
        this.color = (random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {
    var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          stroke("black");
          fill(this.color);
          ellipseMode(CENTER);
          ellipse(0,0,this.width,this.height);
          pop();
    }
    }
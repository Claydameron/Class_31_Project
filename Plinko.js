class Plinko{
    constructor(x,y) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y,15,options);
        this.height = 15;
        this.width = 15;
    
        World.add(world, this.body);
    }
    display() {
    var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          stroke("black");
          fill("white");
          ellipseMode(CENTER);
          ellipse(0,0,this.width,this.height);
          pop();
    }
    }
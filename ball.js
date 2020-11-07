class Ball {
  constructor(x, y, r) {
    var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r=r;
    World.add(world, this.body);
    this.image = loadImage("sprites/paper.png");
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(pos.x, pos.y, this.r, this.r);
    imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
  }
}
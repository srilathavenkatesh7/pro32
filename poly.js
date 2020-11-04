class Polygon{
  constructor() {
      var options = {
          
         'restitution':0.8,
         'friction':1.0,
         'density':1.0
      }
      this.image=loadImage("pol.png");
      this.body = Bodies.circle(100,300,30,options);
     
      this.radius= 30;
      
      World.add(world, this.body);
    }
    display(){
      push ();
      translate(this.body.position.x,this.body.position.y);
      imageMode (CENTER);
      image (this.image,0,0,30,30);
      pop ();

     
      
     
    }
}
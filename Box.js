class Box{
  constructor(x, y, width, height) {
      var options = {
          
         'restitution':0.8,
         'friction':1.0,
         'density':1.0
      }
      this.image=loadImage("wood1.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         
         
         this.Visiblity= this.Visiblity - 5;
         tint(255,this.Visiblity);
         image (this.image,0,0,this.width,this.height);
         pop();
       }
      }

      score (){
        if(this.Visibility<0 && this.Visibility>-105){
   score++;
        }
      }
     
      
    }

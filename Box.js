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
       
        
        imageMode (CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      }
       else{
         World.remove(world, this.body);
         push();     
         this.Visibility= this.Visibility - 5;
         tint(255,this.Visibility);
         image (this.image,this.body.position.x,this.body.position.y,this.width,this.height);
         pop();
       }
      }

      score (){
        if(this.Visibility<0 && this.Visibility>-105){
   score++;

        
      
      }
     
    }
    }

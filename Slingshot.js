class SlingShot {
    constructor (BodyA,pointB){
        var options ={
            bodyA:BodyA,
        pointB:pointB,
        stiffness: 0.6,
        length:8,
        }
        this.pointB=pointB
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB.position;
    strokeWeight(5);
    line (pointA.x,pointA.y,pointB.x,pointB.y);        
    }

    }


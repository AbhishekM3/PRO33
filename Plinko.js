class Plinko{

    constructor(x,y,radius){

        var options={
            'restitution':0.4,
            isStatic: true
        }

        this.body = Bodies.circle(x,y,radius,options);
        
        
        World.add(world,this.body);
        this.r = radius
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};
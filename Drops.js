class Drops{
    constructor(x,y){
        var options={
           friction:0.1,
           isStatic:false,
           restitution:0.1 
        }
        this.r=6;
        this.rain=Bodies.circle(x,y,6,options);
        this.radius = 5;
        World.add(world,this.rain);
    }
    display(){
        var pos=this.rain.position;
        var angle=this.rain.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}
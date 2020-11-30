class Sling
{
    constructor(x,y)
    {
        var options=
        {
            bodyA:x,
            pointB:y,
            stiffness:0.04,
            length:1
        }

        this.bodyA=x;
        this.pointB=y;
        
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
       
    }
    attach(body)
    {
        this.sling.bodyA=body
    }
    fly()
    {
        this.sling.bodyA=null;
    }

    display()
    {   if(this.sling.bodyA)
        {
        stroke("white")
        strokeWeight(3)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
    }
}
}
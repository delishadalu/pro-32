class Box
{
    constructor(x,y,c)
    {
        var options={
            restitution:0.4,
            friction:0.3,
           density:1.3,
            
         //remeber to set density for polygon, if setting density for box.  
        }

        
        this.body=Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body)
        this.color=c
    
    }

    display()
    {
        console.log(this.body.speed)
        if(this.body.speed<2.5)
        {
        push()
        fill(this.color)
        translate(this.body.position.x,this.body.position.y)
         rotate(this.body.angle )
        rectMode(CENTER)
        rect(0,0,30,40)
        pop()
        }
        else{
            
            World.remove(world,this.body)
           
        } 
    }
}
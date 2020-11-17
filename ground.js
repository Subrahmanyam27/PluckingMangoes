class ground{
    constructor(){
        this.body = Bodies.rectangle(width/2,780,1200,20,{isStatic:true});
        this.width = 1200;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
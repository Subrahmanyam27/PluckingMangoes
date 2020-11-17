class mango{
    constructor(x,y){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
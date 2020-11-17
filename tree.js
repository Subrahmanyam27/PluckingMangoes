class tree{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,10,10,{isStatic:true});
        this.width = 600;
        this.height = 600;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}
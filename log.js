Log class{
    var option ={
        restitution : 1;
    }
    this.body = bodies.rectangle(200,11,50,50,option);
    World.add(world. this.body);

    display(){
        var pos -this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height)
    }
}
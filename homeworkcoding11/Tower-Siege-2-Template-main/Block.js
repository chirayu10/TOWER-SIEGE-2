class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity=255
      World.add(world, this.body);
      this.image=loadImage("block.png")
    }
    display(){
      if(this.body.speed<=3){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      }else{
        push()
        tint(255,this.visiblity)
        this.visiblity=this.visiblity-5
        World.remove(world,this.body)
        imageMode (CENTER)
        image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
      }

    }
}
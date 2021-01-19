class Drop{
    constructor(x,y){
        friction: 0.1
    }

    draw(){
        ellipse(drop.position.x, drop.position.y, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);  
        Matter.Bodies.circle();
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    update();
}
class Stone {
    constructor(x,y,w,h){
//i dont know how to make a circle class
var options= {
    isStatic:false

}
this.body=Bodies.rectangle(x,y,w,h,options);
this.y = y;
this.x = x;
this.w = w;
this.h = h;
World.add(world,this.body);
    }
    show(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        stroke(255);
        fill(127);
         ellipse(0,0,this.w,this.h);
         pop();
    }
}
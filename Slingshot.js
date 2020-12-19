class Slingshot{
    constructor(bodyA, pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.04,
        }

        this.pointB = pointB;
        this.body = Matter.Constraint.create(option);
        World.add(world, this.body);
    }

    display(){
        push();
        var b = this.body.bodyA.position;
        var b2 = this.pointB;
        stroke("brown");
        strokeWeight(5);
        line(b.x, b.y, b2.x, b2.y);
        pop();
    }
}
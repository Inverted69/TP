class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.175,
            length: 60
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var ptA = this.chain.bodyA.position;
        var ptB = this.chain.bodyB.position;
        push();
        strokeWeight(4);
        stroke("DarkMagenta")
        line(ptA.x,ptA.y,ptB.x,ptB.y);
        pop();
    }
}
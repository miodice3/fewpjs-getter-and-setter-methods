// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // Math.PI
    get diameter(){
        return this.radius*2;
    }
    
    get circumference(){
        return 2*Math.PI*this.radius
    }

    get area(){
        return Math.PI*(this.radius**2)
    }

    set diameter(value){
        this.radius = value/2
    }

    set circumference(value){
        this.radius = value/2/Math.PI
    }

}
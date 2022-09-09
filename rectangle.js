//Program to Implement Rectangle Class and Square Child class

class Rectangle {
    constructor(length, breadth = length) {
        this.length = length;
        this.breadth = breadth
    }
    getArea() {
        return (`Area is ${this.length * this.breadth}`);
    }
};

class Square extends Rectangle {
    constructor(length, breadth = length) {
        super(length, breadth);
    }
};
//driver Code
let rect = new Square(15);
console.log(rect.getArea())
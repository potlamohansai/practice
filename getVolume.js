//Program to get Volume of a Cylinder, Sphere and Cone

function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height;
    this.getVolume = function () {
        let volume = Math.PI * Math.pow(this.radius,2) * this.height;
        return volume.toFixed(4);
    }
}

function Sphere(radius) {
    this.radius = radius;
    this.getVolume = function () {
        let volume = Math.PI * (4/3) * Math.pow(this.radius,3);
        return volume.toFixed(4);
    }
}

function Cone(radius, height) {
    this.radius = radius;
    this.height = height;
    this.getVolume = function () {
        let volume = (Math.PI * Math.pow(this.radius,2) * this.height)/3;
        return volume.toFixed(4);
    }
}

//Checking

let cylinder = new Cylinder(5,10);
let sphere = new Sphere(10);
let cone = new Cone(5,10);

console.log(cylinder.getVolume())
console.log(sphere.getVolume())
console.log(cone.getVolume())
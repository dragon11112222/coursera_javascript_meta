var clothes = [];
clothes.push('jumper');
clothes.push('cap');
clothes.push('sneakers');
clothes.push('pants');
clothes.push('skirt');
clothes.pop();
clothes.push('hood');
console.log(clothes[2]);

var favCar = {};
favCar.color = 'skyblue';
favCar.convertible = true;
console.log(favCar);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

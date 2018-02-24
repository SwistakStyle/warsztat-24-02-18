console.log('Hello Seb!')

var textVariable = "Seba";
var numberVariable = 55;
var boolVariable = true;
var nullVariable = null;
var undefinedVariable = undefined;

console.log(textVariable);
console.log(numberVariable);
console.log(boolVariable);
console.log(nullVariable);
console.log(undefinedVariable);

var simplestObject = {
    name: 'Seb',
    lastname: 'P'
}

console.log(simplestObject);

var nestedObj = {
    name: 'Seb',
    car: {
        brand: 'Audi',
        model: 'A3'
    }
}

console.log(nestedObj.car.brand);
var simpleArray = [1,
    2,
    3,
    4,
    5, 
    {name: 'Seb'}];
console.log(simpleArray[1])
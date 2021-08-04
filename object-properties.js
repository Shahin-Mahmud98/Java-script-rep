var computer = {
    price: 29000,
    Storage: '145gb',
    color: 'silver',
    processor: 'intel i5'

}
// console.log(computer);
console.log(computer.processor);
var computerPrice = computer.price
// set a object property value
// different ways to set a value of an object property
var priceProperty = "price"
computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 19000;

console.log(computer);

// console.log(computerPrice);

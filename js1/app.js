const kelvin = 0; 
//set kelvin equal to 293;
const celsius = kelvin - 273; 
//set celsius equal to kelvin - 273;
let fahrenheit = celsius * (9 / 5) + 32;
//set fahrenheit equal to celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
//use .floor method in fahrenheit;
console.log(fahrenheit) = `The temperature is ${fahrenheit} degrees Fahrenheit.`;

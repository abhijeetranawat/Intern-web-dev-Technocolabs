//Temp. in kelvin
const kelvin=0;
//Temp. in celcius
const celcius=kelvin-273;
//Temp in Fahrenheit
let fahrenheit=celcius*(9/5)+32;
//Rounding down fahrenheit
Fahrenheit = Math.floor(fahrenheit);
console.log(`The temprature is ${Fahrenheit} degrees fahrenheit`);
//Temp in Newton scale
let newton = celcius * (33/100);
//Rounding down newton
Newton= Math.floor(newton);
console.log(`The temprature is ${Newton} degrees Newton`);
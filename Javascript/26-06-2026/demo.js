
// 1. null
let data = null;

console.log(data);
console.log(typeof data);   

// 2. isNaN()

console.log(isNaN("Hello"));  
console.log(isNaN("100"));     
console.log(isNaN(50));       

// 3. Number.isNaN()

console.log(Number.isNaN(NaN));     
console.log(Number.isNaN("Hello"));  
console.log(Number.isNaN(50));       

// 4. NaN

let result = 0 / 0;

console.log(result);     
console.log(result == NaN);   

// 5. undefined and null

let x;
let y = null;

console.log(x); 
console.log(y);          

// 6. Infinity and -Infinity


console.log(10 / 0);  
console.log(-10 / 0);    
// 7. Number Constants

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
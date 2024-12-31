// Bucle `for`
console.log("Bucle for:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Bucle `while`
console.log("\nBucle while:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Bucle `do...while`
console.log("\nBucle do...while:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Bucle `for...of`
console.log("\nBucle for...of:");
let fruits = ["manzana", "banana", "cereza"];
for (let fruit of fruits) {
    console.log(fruit);
}

// Bucle `for...in`
console.log("\nBucle for...in:");
let person = {
    name: "Gui",
    age: 28,
    occupation: "Programador"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`); 
}

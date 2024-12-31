// Condicional `if`
let age = 20;
if (age >= 18) {
    console.log("Eres mayor de edad.");
}

// Condicional `else`
age = 16;
if (age >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Condicional `else if`
age = 25;
if (age >= 18 && age < 30) {
    console.log("Eres un adulto joven.");
} else if (age >= 30 && age < 60) {
    console.log("Eres un adulto.");
} else {
    console.log("Eres menor de edad o una persona mayor.");
}

// Operadores Lógicos en Condicionales
age = 25;
let hasLicense = true;
if (age >= 18 && hasLicense) {
    console.log("Puedes conducir.");
} else {
    console.log("No puedes conducir.");
}

// Operador Ternario
age = 20;
let canDrive = age >= 18 ? "Puedes conducir" : "No puedes conducir";
console.log(canDrive);

// Anidamiento de Condicionales
age = 16;
let hasPermission = false;
if (age >= 18) {
    console.log("Eres adulto.");
} else {
    if (hasPermission) {
        console.log("Eres menor de edad pero tienes permiso.");
    } else {
        console.log("Eres menor de edad y no tienes permiso.");
    }
}

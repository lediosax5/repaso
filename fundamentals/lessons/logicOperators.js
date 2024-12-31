// "AND" (&&): Todos los valores deben ser true para devolver true.
console.log("true && true:", true && true);

var hasAge = true;
var hasDriverLicense = true;

if (hasAge && hasDriverLicense) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

// "OR" (||): Al menos un valor debe ser true para devolver true.
console.log("true || false:", true || false);

hasDriverLicense = false;

if (hasAge || hasDriverLicense) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

// "NOT" (!): Invierte el valor de una expresión.
console.log("Invierte el valor", !false);

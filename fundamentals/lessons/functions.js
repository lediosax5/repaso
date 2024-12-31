// Declaración de funciones
function saludar() {
    console.log("Hola, soy una funcion");
}
saludar();

// Funciones con parámetros
function sumar(a, b) {
    return a + b;
}
console.log("La suma de 5 y 3 es:", sumar(5, 3));

// Funciones con valores predeterminados
function saludarConNombre(nombre = "invitado") {
    console.log(`¡Hola, ${nombre}!`);
}
saludarConNombre("Gui");
saludarConNombre();

// Funciones anónimas
const multiplicar = function (a, b) {
    return a * b;
};
console.log("El resultado de multiplicar 4 por 7 es:", multiplicar(4, 7));

// Funciones flecha (arrow functions)
const dividir = (a, b) => a / b;
console.log("El resultado de dividir 20 entre 4 es:", dividir(20, 4));

// Funciones como argumentos
function calcular(a, b, operacion) {
    return operacion(a, b);
}
console.log("Usando una función como argumento (resta):", calcular(10, 3, (a, b) => a - b));

// Funciones que retornan otras funciones
function crearMultiplicador(factor) {
    return (numero) => numero * factor;
}
const multiplicarPorDos = crearMultiplicador(2);
console.log("Multiplicar 5 por 2:", multiplicarPorDos(5));

// Funciones autoinvocadas (IIFE)
(function () {
    console.log("Esta función se ejecuta inmediatamente.");
})();

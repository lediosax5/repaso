// Logs
console.log("Hola mamá");

// Usamos `var` y `let` para definir variables, diferenciando su alcance
var firstName = "Gui"; // Variable global
let lastName = "Piaggio"; // Variable con alcance de bloque
console.log("Mi nombre es " + firstName + " y mi apellido " + lastName);

// Declaración y asignación de múltiples variables
var age, dateOfBirth, gender;
age = 28;
dateOfBirth = "1996-08-29";
gender = "Hombre";
console.log("Mi edad es " + age + " años, nací el " + dateOfBirth + " y soy " + gender);

// Las constantes no pueden ser reasignadas una vez definidas
const occupation = "Programador";
console.log("Mi ocupación es " + occupation);

// Aquí demostramos diferentes tipos de datos en JavaScript y cómo verificarlos
var stringData = "Hola";
var numberData = 10;
var booleanData = true;
var undefinedValue;
var nullValue = null;
var arrayData = [1, 2, 3, 4, 5];
var objectData = {
  name: "Gui",
  age: 28,
};

// Mostramos los tipos de datos usando `typeof`
console.log(
  "Tipos de datos: " +
    typeof stringData + ", " +
    typeof numberData + ", " +
    typeof booleanData + ", " +
    typeof undefinedValue + ", " +
    typeof nullValue + ", " + // Muestra "object" por un comportamiento histórico de JS
    typeof arrayData + ", " + // Muestra "object" por un comportamiento histórico de JS
    typeof objectData
);

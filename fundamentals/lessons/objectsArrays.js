// Concatenación e interpolación
var price = 50;
var itemName = "Taza";
var messageToPrint = "El precio de la " + itemName + " es " + price; // Concatenación clásica
console.log(messageToPrint);

messageToPrint = `El precio de la ${itemName} #2 es ${price}`; // Interpolación moderna
console.log(messageToPrint);

// Objetos y arrays básicos
var person = {
    name: "Gui",
    age: 28,
    isDeveloper: true,
    cars: ["BMW", "Audi", "Mercedes"],
};
console.log(person);
console.log(person.name);
console.log(person.cars[1]);

var people = [
    { name: "Manu", age: 22, isDeveloper: true },
    { name: "Juan", age: 25, isDeveloper: false },
    { name: "Lucas", age: 28, isDeveloper: true },
];
people[0].name = "Manuel"; people[1].name = "Juampi";
console.log(people);
console.log(people[0].name);

// Recorrer arrays de objetos usando forEach
console.log("Recorriendo el array de objetos:");
people.forEach((person) => {
    console.log(`${person.name} tiene ${person.age} años.`);
});

// Agregar y eliminar elementos de un array
console.log("Manipulando el array:");
people.push({ name: "Ana", age: 30, isDeveloper: true });
console.log("Después de agregar a Ana:", people);

people.pop(); // Eliminamos el último elemento del array
console.log("Después de eliminar el último elemento:", people);

// Filtrar objetos dentro de un array
console.log("Filtrando desarrolladores:");
var developers = people.filter((data) => data.isDeveloper);
console.log(developers);

// Transformar arrays con map para obtener valores
console.log("Transformando el array:");
var names = people.map((data) => data.name);
console.log(names);

// Reducir arrays a un valor único
console.log("Calculando la edad total:");
var totalAge = people.reduce((sum, data) => sum + data.age, 0);
console.log("Edad total:", totalAge);

// Trabajar con objetos anidados
console.log("Trabajando con objetos anidados:");
var company = {
    name: "TechCorp",
    employees: [
        { name: "Guido", position: "QA", salary: 5000 },
        { name: "Ana", position: "Developer", salary: 7000 },
        { name: "Juan", position: "Manager", salary: 9000 },
    ],
};

// Filtrar empleados por salario
console.log("Empleados con salario mayor a 6000:");
var highEarners = company.employees.filter((data) => data.salary > 6000);
console.log(highEarners);

// Aumentar el salario de todos los empleados
console.log("Aumentando salarios:");
company.employees = company.employees.map((data) => {
    data.salary += 500; // += modifica el valor actual y lo guarda
    return data;
});
console.log(company.employees);

// Definición de un array que puede contener números o cadenas
const prices: (number | string)[] = [1, 3, 2, 2, 2, 'as'];

// Agregando elementos al array
prices.push(1);
prices.push('1');

// Definición de un array tupla con restricciones en los tipos de elementos
let user: [string, number, boolean];

// Asignaciones válidas e inválidas a la variable 'user'
user = ['nicobytes', 15]; // Correcto: cadena, número, booleano
// user = ['12', 15]; // Incorrecto: '12' es una cadena, no un booleano

// user = []; // Incorrecto: falta un elemento booleano
// user = ['nico']; // Incorrecto: falta un número y un booleano
// user = ['nico', 12]; // Incorrecto: falta un booleano

// Asignación válida a la variable 'user'
user = ['nico', 12, true];

// Desestructuración del array tupla en variables separadas
const [username, age] = user;

// Imprimiendo los valores desestructurados
console.log(username); // 'nico'
console.log(age); // 12

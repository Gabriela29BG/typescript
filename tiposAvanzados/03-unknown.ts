// Declaración de una variable con tipo 'any'
let anyVar: any;

// La variable 'anyVar' puede contener cualquier tipo de valor
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// Declaración de una variable con tipo 'boolean' e intento de asignación desde 'any'
let isNew: boolean = anyVar; // Esto compila, pero puede conducir a errores en tiempo de ejecución

// Se intentan llamar a métodos que no existen en todos los tipos
anyVar.doSomething(); // Compila, pero podría causar un error en tiempo de ejecución
anyVar.touppercase(); // Compila, pero podría causar un error en tiempo de ejecución

// Declaración de una variable con tipo 'unknown'
let unknowVar: unknown;

// 'unknowVar' puede contener cualquier tipo de valor, pero no se pueden realizar operaciones directamente sobre ella
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

// Uso de chequeo de tipo antes de realizar operaciones específicas
// Asegurándose de que 'unknowVar' es de tipo 'string' antes de llamar a 'toUpperCase'
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

// Asegurándose de que 'unknowVar' es de tipo 'boolean' antes de realizar una asignación
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

// Función que devuelve 'unknown' y utiliza 'JSON.parse'
const parse = (str: string): unknown => {
  return JSON.parse(str);
}

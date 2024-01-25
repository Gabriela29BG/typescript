// Definición de un array de números como ReadonlyArray
const numbers: ReadonlyArray<number> = [1, 2, 2, 2];

// Intentar realizar operaciones de modificación en un ReadonlyArray resultará en errores o advertencias.

// Error: No se puede agregar elementos a un ReadonlyArray
numbers.push(9);

// Error: No se puede eliminar elementos de un ReadonlyArray
numbers.pop();

// Error: No se puede agregar elementos al principio de un ReadonlyArray
numbers.unshift(1);

// Advertencia: La función filter no debería modificar el array, pero TypeScript no puede inferir esto.
numbers.filter(() => {});

// Advertencia: La función reduce no debería modificar el array, pero TypeScript no puede inferir esto.
numbers.reduce(() => 0);

// Advertencia: La función map no debería modificar el array, pero TypeScript no puede inferir esto.
numbers.map(() => 0);

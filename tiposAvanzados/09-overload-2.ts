// Definición de las sobrecargas de la función parseStr para distintos tipos de entrada
export function parseStr(input: string): string[]; // Sobrecarga para una cadena, devuelve un array de caracteres
export function parseStr(input: string[]): string; // Sobrecarga para un array de caracteres, devuelve una cadena
export function parseStr(input: number): boolean; // Sobrecarga para un número, devuelve un booleano

// Implementación de la función parseStr que acepta cualquier tipo de entrada
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // Si es un array, devuelve una cadena
  } else if (typeof input === 'string') {
    return input.split(''); // Si es una cadena, devuelve un array de caracteres
  } else if (typeof input === 'number') {
    return true; // Si es un número, devuelve un booleano
  }

  // Si el tipo de entrada no coincide con ninguna de las sobrecargas, devuelve el mismo tipo de entrada
  return input;
}

// Ejemplos de llamadas a la función con distintos tipos de entrada
const rtaArray = parseStr('Nico'); // Debería ser string[]
rtaArray.reverse(); // Funciona porque 'rtaArray' es de tipo string[]

const rtaStr = parseStr(['N', 'i', 'c', 'o']); // Debería ser string
rtaStr.toLowerCase(); // Funciona porque 'rtaStr' es de tipo string

const rtaBoolean = parseStr(12); // Debería ser boolean

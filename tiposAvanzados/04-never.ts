//El tipo never en TypeScript representa un valor que nunca ocurre. Esto significa que el valor no puede ser devuelto por una función o asignado a una variable.

// El tipo never se usa comúnmente para representar funciones que siempre lanzan un error o que nunca regresan. 
//ciclos que nunca van a parar o detenen el sistema
// // Función que entra en un bucle infinito, imprimiendo un mensaje en la consola
const withoutEnd = () => {
    while (true) {
      console.log('nunca parar de aprender');
    }
  }
  
  // Función que arroja un error con un mensaje específico
  const fail = (message: string) => {
    throw new Error(message);
  }
  
  // Función que verifica el tipo del argumento de entrada y devuelve un mensaje basado en el tipo
  const example = (input: unknown) => {
    if (typeof input === 'string') {
      return 'es un string';
    } else if (Array.isArray(input)) {
      return 'es un array';
    }
    // Si el tipo no coincide con 'string' ni 'array', llama a la función 'fail' con un mensaje de error
    return fail('not match');
  }
  
  // Ejemplos de llamadas a la función 'example'
  console.log(example('Hola')); // Imprime 'es un string'
  console.log(example([1, 1, 1, 1])); // Imprime 'es un array'
  console.log(example(1212)); // Detiene la ejecución ya que 'example' llama a 'fail'
  console.log(example('Hola despues del fail')); // No se ejecuta debido a la llamada anterior
  console.log(example('Hola despues del fail')); // No se ejecuta debido a la llamada anterior
  console.log(example('Hola despues del fail')); // No se ejecuta debido a la llamada anterior
  
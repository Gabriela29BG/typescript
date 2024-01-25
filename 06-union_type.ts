
    // Declaración de la variable 'userId' con la posibilidad de ser string o number.
    let userId: string | number;
    // Asignación de un número a 'userId'.
    userId = 1212;
    // Reasignación de una cadena a 'userId'.
    userId = 'asasa';
  
    // Definición de una función 'greeting' que acepta un parámetro 'myText' de tipo string o number.
    function greeting(myText: string | number) {
      // Verificación del tipo de 'myText' utilizando 'typeof'.
      if (typeof myText === 'string') {
        // Aplicación de 'toLowerCase()' solo si 'myText' es de tipo string.
        console.log(`string ${myText.toLowerCase()}`);
      } else {
        console.log(`number ${myText.toFixed(1)}`);
      }
    }
  
    // Llamada a la función 'greeting' con una cadena como argumento.
    greeting('Nicolas');
    // Llamada a la función 'greeting' con un número como argumento.
    greeting(12.1212121212);
  
  
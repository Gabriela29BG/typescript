
    // Alias de tipo (type) para definir el tipo UserId, que puede ser string o number.
    type UserId = string | number;
    // Declaración de la variable 'userId' con el tipo UserId.
    let userId: UserId;
  
    // Tipo literal Sizes que solo puede tener los valores 'S', 'M', 'L' o 'XL'.
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    // Declaración de la variable 'shirtSize' con el tipo Sizes.
    let shirtSize: Sizes;
    // Asignación de diferentes valores a 'shirtSize'.
    shirtSize = 'L';
    shirtSize = 'M';
    shirtSize = 'XL';
    // Error: 'M' ya fue asignado anteriormente.
    // shirtSize = 'M';
  
    // Función 'greeting' que acepta dos parámetros: 'myText' de tipo UserId y 'size' de tipo Sizes.
    function greeting(myText: UserId, size: Sizes) {
      // Verificación del tipo de 'myText'.
      if (typeof myText === 'string') {
        console.log(`string ${myText.toLowerCase()}`);
      }
    }
  
    // Llamada a 'greeting' con un número y un tamaño como argumentos.
    greeting(111, 'M');
    // Llamada a 'greeting' con una cadena y un tamaño como argumentos.
    greeting('111', 'XL');
  
  

    // Declaración de variables con tipos específicos de null y undefined.
    let myNull: null = null;
    let myUndefined: undefined = undefined;
  
    // Declaración de variables con union types permitiendo null o un valor específico.
    let myNumber: number | null = null;
    myNumber = 12;
  
    let myString: string | undefined = undefined;
    myString = 'aas';
  
    // Función 'hi' que acepta un parámetro 'name' que puede ser string o null.
    function hi(name: string | null) {
      let hello = 'Hola ';
      // Verificación del valor de 'name' antes de concatenar.
      if (name) {
        hello += name.toLowerCase();
      } else {
        hello += 'nobody';
      }
      console.log(hello);
    }
  
    // Función 'hiV2' que acepta un parámetro 'name' que puede ser string o null.
    // Utiliza el operador de encadenamiento opcional (?.) y el operador de fusión nula (||).
    function hiV2(name: string | null) {
      let hello = 'Hola ';
      hello += name?.toLowerCase() || 'nobody';
      console.log(hello);
    }
  
    // Llamadas a las funciones 'hi' y 'hiV2' con diferentes valores.
    hi('Nicolas');
    hi(null);
  
    hiV2('Nicolas');
    hiV2(null);
  
  
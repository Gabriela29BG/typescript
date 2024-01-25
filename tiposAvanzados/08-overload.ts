//En este código, parseStr determina el tipo de entrada (string o string[]) y realiza la conversión correspondiente. Luego, se realiza una verificación de tipo antes de realizar operaciones específicas. Ten en cuenta que algunas operaciones, como reverse() y toLowerCase(), son específicas de los arrays o las cadenas, respectivamente, y por eso se realiza la verificación de tipo antes de intentar ejecutar esas operaciones.
// Función que acepta una cadena o un array de caracteres y realiza la conversión
function parseStr(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
      // Si es un array, une los caracteres para formar una cadena
      return input.join(''); // Devuelve una cadena
    } else {
      // Si es una cadena, divide la cadena en un array de caracteres
      return input.split(''); // Devuelve un array de caracteres
    }
  }
  
  // Ejemplo de llamada a la función con una cadena
  const rtaArray = parseStr('Nico');
  // rtaArray.reverse(); // Esto daría un error ya que 'rtaArray' es de tipo string | string[]
  if (Array.isArray(rtaArray)) {
    rtaArray.reverse(); // Solo se ejecutará si 'rtaArray' es un array
  }
  console.log('rtaArray', 'Nico =>', rtaArray);
  
  // Ejemplo de llamada a la función con un array de caracteres
  const rtaStr = parseStr(['N', 'i', 'c', 'o']);
  // rtaStr.toLowerCase(); // Esto daría un error ya que 'rtaStr' es de tipo string | string[]
  if (typeof rtaStr === 'string') {
    rtaStr.toLowerCase(); // Solo se ejecutará si 'rtaStr' es una cadena
  }
  console.log('rtaStr', "['N','i','c','o'] =>", rtaStr);
  
(() => {
    // Función 'calcTotal' que toma un array de precios y devuelve el total como una cadena.
    const calcTotal = (prices: number[]): string => {
      let total = 0;
      // Iteración sobre cada elemento del array 'prices'.
      prices.forEach((item) => {
        total += item;
      });
      // La función devuelve el total convertido a cadena.
      return total.toString();
    };
  
    // Función 'printTotal' que toma un array de precios, calcula el total y lo imprime en la consola.
    const printTotal = (prices: number[]): void => {
      // Llamada a 'calcTotal' para obtener el total como cadena.
      const rta = calcTotal(prices);
      // Imprimir el mensaje que incluye el total en la consola.
      console.log(`El total es ${rta}`);
    };
  
    // Llamada a 'printTotal' con un array de precios.
    printTotal([1, 2, 1, 1, 1]);
  })();
  
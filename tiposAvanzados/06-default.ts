// Este código exporta la función createProduct que crea objetos de productos con propiedades opcionales y valores predeterminados. Se proporcionan ejemplos de llamadas a esta función con diferentes combinaciones de argumentos, demostrando cómo funcionan los valores predeterminados y los parámetros en TypeScript. Los comentarios adicionales explican que 0, '', y false se evalúan como false en contextos booleanos en JavaScript.
// Función que crea un objeto de producto con propiedades y valores predeterminados

//valor por defecto
export const createProduct = (
    id: string | number,
    isNew: boolean = true, // Parámetro con valor predeterminado 'true'
    stock: number = 10,     // Parámetro con valor predeterminado '10'
  ) => {
    return {
      id,
      stock,
      isNew
    }
  }
  
  // Ejemplos de llamadas a 'createProduct'
  
  // Crea un producto con id: 1, isNew: true, stock: 12
  const p1 = createProduct(1, true, 12);
  console.log(p1);
  
  // Crea un producto con id: 1, isNew: true (valores predeterminados para stock y isNew)
  const p2 = createProduct(1);
  console.log(p2);
  
  // Crea un producto con id: 1, isNew: false, stock: 0
  const p3 = createProduct(1, false, 0);
  console.log(p3);
  
  // Crea un producto con id: 1, isNew: true, stock: 100
  const p4 = createProduct(1, true, 100);
  console.log(p4);
  
  // Crea un producto con id: 5, isNew: false (valor predeterminado para stock)
  const p5 = createProduct(5, false);
  console.log(p5);
  